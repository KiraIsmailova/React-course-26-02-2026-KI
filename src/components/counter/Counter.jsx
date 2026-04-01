import { Button } from '../Button/Button';
import styles from './Counter.module.css';

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className={styles.counterWrapper}>
      <Button onClick={decrement}>-</Button>
      <div>{value}</div>
      <Button onClick={increment}>+</Button>
    </div>
  );
};
