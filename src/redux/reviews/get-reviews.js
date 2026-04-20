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

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async ({ restaurantId, formData }, { rejectWithValue }) => {
    const USER_ID = '123321';

    try {
      const response = await fetch(
        `http://localhost:3001/api/review/${restaurantId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            userId: USER_ID,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Server error');
      }

      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
