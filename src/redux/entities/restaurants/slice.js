import { createSelector, createSlice } from '@reduxjs/toolkit';
import { getRestaurantById, getRestaurants } from './get-restaurants';

const initialState = {
  requestStatus: 'idle',
  ids: [],
  entities: {},
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.ids = payload.map(({ id }) => id);
        ((state.entities = payload.reduce((acc, restaurant) => {
          acc[restaurant.id] = restaurant;

          return acc;
        }, {})),
          (state.requestStatus = 'fulfilled'));
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = 'rejected';
      })

      .addCase(getRestaurantById.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        const restaurant = payload;

        state.entities[restaurant.id] = restaurant;

        state.requestStatus = 'fulfilled';
      })
      .addCase(getRestaurantById.rejected, (state) => {
        state.requestStatus = 'rejected';
      }),
});

export const selectRestaurantsSlice = (state) => state[restaurantsSlice.name];
export const selectRestaurantById = (state, restaurantId) =>
  selectRestaurantsSlice(state).entities[restaurantId];

export const selectRestaurantIds = (state) => selectRestaurantsSlice(state).ids;

export const selectAllRestaurants = createSelector(
  [selectRestaurantIds, selectRestaurantsSlice],
  (ids, slice) => {
    return ids.map((id) => slice.entities[id]);
  }
);

export const selectRequestStatus = (state) =>
  selectRestaurantsSlice(state).requestStatus;
