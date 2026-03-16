import './Counter.css';

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className="counter-wrapper">
      <button onClick={decrement}>-</button>
      <div>{value}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};
