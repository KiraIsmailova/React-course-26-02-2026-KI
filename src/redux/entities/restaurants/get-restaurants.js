import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantIds } from './slice';

export const getRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3001/api/restaurants');

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('empty array');
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const existingIds = selectRestaurantIds(state);

      if (existingIds && existingIds.length > 0) {
        return false;
      }
    },
  }
);

export const getRestaurantById = createAsyncThunk(
  'restaurants/getRestaurantById',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`
    );

    const result = await response.json();

    if (!result || Object.keys(result).length === 0) {
      return rejectWithValue('Restaurant not found');
    }

    return result;
  }
);
