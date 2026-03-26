import { createSelector, createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../constants/normalized-mock';

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
});

export const selectDishesSlice = (state) => state[dishesSlice.name];
export const selectDishesById = (state, dishId) =>
  selectDishesSlice(state).entities[dishId];
export const selectAllDishes = createSelector([selectDishesSlice], (slice) => {
  return slice.ids.map((id) => slice.entities[id]);
});
