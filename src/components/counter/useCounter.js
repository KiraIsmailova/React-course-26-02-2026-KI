import { useState } from 'react';

export const useCounter = () => {
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
