import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getDishById, getDishes } from './get-dishes';

const dishesAdapter = createEntityAdapter({});

const initialState = dishesAdapter.getInitialState({
  requestStatus: 'idle',
});

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        dishesAdapter.setAll(state, payload);
        state.requestStatus = 'fulfilled';
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = 'rejected';
      })

      .addCase(getDishById.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        state.entities[payload.id] = payload;

        state.requestStatus = 'fulfilled';
      })
      .addCase(getDishById.rejected, (state) => {
        state.requestStatus = 'rejected';
      }),
});

const { selectAll, selectById, selectIds } = dishesAdapter.getSelectors(
  (state) => state[dishesSlice.name]
);

export const selectDishesById = selectById;
export const selectAllDishes = selectAll;
export const selectDishIds = selectIds;
export const selectRequestDishesStatus = (state) => state.dishes.requestStatus;
