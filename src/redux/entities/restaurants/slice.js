import { createSelector, createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../constants/normalized-mock';

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
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
