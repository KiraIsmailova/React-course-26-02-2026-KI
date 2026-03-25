import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../constants/normalized-mock';

const initialState = {
  entities: normalizedReviews.reduce((acc, reviews) => {
    acc[reviews.id] = reviews;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
});

export const selectReviewsSlice = (state) => state[reviewsSlice.name];
