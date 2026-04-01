import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../constants/normalized-mock';

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
});

export const selectUsersSlice = (state) => state[usersSlice.name];
export const selectUsersById = (state, userId) => {
  const slice = selectUsersSlice(state);

  if (!slice || !slice.entities) {
    return undefined;
  }

  return slice.entities[userId];
};
