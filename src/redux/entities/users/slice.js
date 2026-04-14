import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './get-users';

const initialState = {
  requestStatus: 'idle',
  ids: [],
  entities: {},
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.ids = payload.map(({ id }) => id);
        ((state.entities = payload.reduce((acc, restaurant) => {
          acc[restaurant.id] = restaurant;

          return acc;
        }, {})),
          (state.requestStatus = 'fulfilled'));
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = 'rejected';
      }),
});

export const selectUsersSlice = (state) => state[usersSlice.name];
export const selectUsersById = (state, userId) => {
  const slice = selectUsersSlice(state);

  if (!slice || !slice.entities) {
    return undefined;
  }

  return slice.entities[userId];
};
export const selectUsersIds = (state) => selectUsersSlice(state).ids;
export const selectRequestUsersStatus = (state) =>
  selectUsersSlice(state).requestStatus;
