import './counter.css';
import { useCounter } from './useCounter';

export const Counter = () => {
  const { value, decrement, increment } = useCounter();

  return (
    <div className="counter-wrapper">
      <button onClick={decrement}>-</button>
      <div>{value}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};
