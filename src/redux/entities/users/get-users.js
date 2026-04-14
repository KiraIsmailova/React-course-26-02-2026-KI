import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectUsersIds } from './slice';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { isRejectedWithValue }) => {
    const response = await fetch('http://localhost:3001/api/users');
    const result = await response.json();

    if (!result.length) {
      return isRejectedWithValue('empty array');
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const existingIds = selectUsersIds(state);

      if (existingIds && existingIds.length > 0) {
        return false;
      }
    },
  }
);
