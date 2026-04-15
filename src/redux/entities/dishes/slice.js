import { createSelector, createSlice } from '@reduxjs/toolkit';
import { getDishById, getDishes } from './get-dishes';

const initialState = {
  requestStatus: 'idle',
  ids: [],
  entities: {},
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        state.ids = payload.map(({ id }) => id);
        ((state.entities = payload.reduce((acc, dish) => {
          acc[dish.id] = dish;

          return acc;
        }, {})),
          (state.requestStatus = 'fulfilled'));
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = 'rejected';
      })

      .addCase(getDishById.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        const dish = payload;

        state.entities[dish.id] = dish;

        state.requestStatus = 'fulfilled';
      })
      .addCase(getDishById.rejected, (state) => {
        state.requestStatus = 'rejected';
      }),
});

export const selectDishesSlice = (state) => state[dishesSlice.name];
export const selectDishesById = (state, dishId) =>
  selectDishesSlice(state).entities[dishId];
export const selectAllDishes = createSelector([selectDishesSlice], (slice) => {
  return slice.ids.map((id) => slice.entities[id]);
});
export const selectDishIds = (state) => selectDishesSlice(state).ids;
export const selectRequestStatus = (state) =>
  selectDishesSlice(state).requestStatus;
