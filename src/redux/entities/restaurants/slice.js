import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurantById, getRestaurants } from './get-restaurants';

const restaurantAdapter = createEntityAdapter({});

const initialState = restaurantAdapter.getInitialState({
  requestStatus: 'idle',
});

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        restaurantAdapter.setAll(state, payload);
        state.requestStatus = 'fulfilled';
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = 'rejected';
      })

      .addCase(getRestaurantById.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        state.entities[payload.id] = payload;

        state.requestStatus = 'fulfilled';
      })
      .addCase(getRestaurantById.rejected, (state) => {
        state.requestStatus = 'rejected';
      }),
});

const { selectAll, selectById, selectIds } = restaurantAdapter.getSelectors(
  (state) => state[restaurantsSlice.name]
);

export const selectRestaurantById = selectById;
export const selectRestaurantIds = selectIds;
export const selectAllRestaurants = selectAll;
export const selectRequestRestaurantStatus = (state) =>
  state.restaurants.requestStatus;
