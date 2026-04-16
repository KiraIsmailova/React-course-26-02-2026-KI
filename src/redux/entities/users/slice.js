import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUsers } from './get-users';

const userAdapter = createEntityAdapter({});

const initialState = userAdapter.getInitialState({
  requestStatus: 'idle',
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        userAdapter.setAll(state, payload);
        state.requestStatus = 'fulfilled';
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = 'rejected';
      }),
});

const { selectById, selectIds } = userAdapter.getSelectors(
  (state) => state[usersSlice.name]
);

export const selectUsersById = selectById;
export const selectUsersIds = selectIds;
export const selectRequestUsersStatus = (state) => state.users.requestStatus;
