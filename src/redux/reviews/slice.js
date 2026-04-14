import { createSelector, createSlice } from '@reduxjs/toolkit';
import { getReviews } from './get-reviews';

const initialState = {
  requestStatus: 'idle',
  ids: [],
  entities: {},
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.ids = payload.map(({ id }) => id);
        ((state.entities = payload.reduce((acc, dish) => {
          acc[dish.id] = dish;

          return acc;
        }, {})),
          (state.requestStatus = 'fulfilled'));
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = 'rejected';
      }),
});

export const selectReviewsSlice = (state) => state[reviewsSlice.name];
export const selectReviewById = (state, reviewId) =>
  selectReviewsSlice(state).entities[reviewId];
export const selectAllReviews = createSelector(
  [selectReviewsSlice],
  (slice) => {
    return slice.ids.map((id) => slice.entities[id]);
  }
);
export const selectRequestStatus = (state) =>
  selectReviewsSlice(state).requestStatus;
