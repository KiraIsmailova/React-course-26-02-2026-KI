import { createAsyncThunk } from '@reduxjs/toolkit';
//import { selectRestaurantIds } from './slice';

export const getRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3001/api/restaurants');

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('empty array');
    }

    return result;
  }
  // {
  //   condition: (_, { getState }) => {
  //     return selectRestaurantIds(getState().length === 0);
  //   },
  // }
);
