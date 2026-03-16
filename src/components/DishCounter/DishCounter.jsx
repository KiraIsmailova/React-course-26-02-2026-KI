import { Counter } from '../counter/Counter';
import { useCounter } from '../counter/useCounter';

export const DishCounter = () => {
  const { value, increment, decrement } = useCounter();

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
