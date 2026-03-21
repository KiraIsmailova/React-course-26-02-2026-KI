import { Button } from '../Button/Button';
import './Counter.css';

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className="counterWrapper">
      <Button onClick={decrement}>-</Button>
      <div>{value}</div>
      <Button onClick={increment}>+</Button>
    </div>
  );
};
