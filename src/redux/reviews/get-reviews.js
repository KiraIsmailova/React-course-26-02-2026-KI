import { createAsyncThunk } from '@reduxjs/toolkit';

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('empty array');
    }

    return result;
  }
);
