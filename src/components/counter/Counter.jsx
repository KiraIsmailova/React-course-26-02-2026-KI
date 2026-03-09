import { useState } from 'react';
import './counter.css';

const useCounter = () => {
  const [count, setCount] = useState(0);

  return {
    value: count,
    increment: () => {
      if (count >= 5) return;
      setCount(count + 1);
    },
    decrement: () => {
      if (count <= 0) return;
      setCount(count - 1);
    },
  };
};

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
