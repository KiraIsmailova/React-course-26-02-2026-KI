import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { addReview, getReviews } from './get-reviews';

const reviewsAdapter = createEntityAdapter({});

const initialState = reviewsAdapter.getInitialState({
  requestStatus: 'idle',
});

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        reviewsAdapter.setAll(state, payload);
        state.requestStatus = 'fulfilled';
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = 'rejected';
      })
      .addCase(addReview.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.entities[payload.id] = payload;
        state.ids.push(payload.id);

        state.requestStatus = 'fulfilled';
      })
      .addCase(addReview.rejected, (state) => {
        state.status = 'rejected';
      }),
});

const { selectAll, selectById } = reviewsAdapter.getSelectors(
  (state) => state[reviewsSlice.name]
);

export const selectReviewById = selectById;
export const selectAllReviews = selectAll;
export const selectRequestReviewStatus = (state) => state.reviews.requestStatus;
