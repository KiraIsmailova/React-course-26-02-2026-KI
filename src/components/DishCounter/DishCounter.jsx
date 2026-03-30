import { Counter } from '../counter/Counter';
import { useCartCounter } from '../counter/useCartCounter';

export const DishCounter = ({ id }) => {
  const { value, increment, decrement } = useCartCounter(id);

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
