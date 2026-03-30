import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemQuantity,
} from '../../redux/entities/cart/slice';

export const useCartCounter = (dishId) => {
  const dispatch = useDispatch();

  const value = useSelector((state) => selectCartItemQuantity(state, dishId));

  const increment = () => {
    if (value >= 5) return;
    dispatch(addToCart({ id: dishId }));
  };

  const decrement = () => {
    if (value < 0) return;
    dispatch(removeFromCart({ id: dishId }));
  };

  return { value, increment, decrement };
};
