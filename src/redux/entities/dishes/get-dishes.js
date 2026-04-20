import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDishIds } from './slice';

export const getDishes = createAsyncThunk(
  'dishes/getDishes',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('empty array');
    }

    return result;
  }
);

export const getDishById = createAsyncThunk(
  'dishes/getDishById',
  async (dishId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
    const result = await response.json();

    if (!result || Object.keys(result).length === 0) {
      return rejectWithValue('Restaurant not found');
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const existingIds = selectDishIds(state);

      if (existingIds && existingIds.length > 0) {
        return false;
      }
    },
  }
);
