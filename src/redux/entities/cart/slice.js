import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      if (!state.items[id]) {
        state.items[id] = 0;
      }
      state.items[id] += 1;
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id] -= 1;
        if (state.items[id] === 0) {
          delete state.items[id];
        }
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

const selectCartSlice = (state) => state[cartSlice.name];
const selectCartItems = (state) => selectCartSlice(state).items;

export const selectCartItemQuantity = createSelector(
  [selectCartItems, (_, dishId) => dishId],
  (items, dishId) => items[dishId] || 0
);

export const selectCartFullItems = createSelector(
  [selectCartItems, (state) => state.dishes],
  (items, dishesSlice) => {
    return Object.keys(items)
      .map((id) => {
        const dish = dishesSlice.entities[id];
        const quantity = items[id];
        if (!dish) return null;
        return {
          ...dish,
          quantity,
          total: dish.price * quantity,
        };
      })
      .filter(Boolean);
  }
);

export const selectCartTotalPrice = createSelector(
  [selectCartFullItems],
  (fullItems) => fullItems.reduce((total, item) => total + item.total, 0)
);

export const selectCartTotalCount = createSelector([selectCartItems], (items) =>
  Object.values(items).reduce((count, qty) => count + qty, 0)
);
