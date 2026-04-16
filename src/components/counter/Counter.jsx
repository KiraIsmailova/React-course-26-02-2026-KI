import { Button } from '../Button/Button';
import styles from './Counter.module.css';

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className={styles.counterWrapper}>
      <Button type="button" onClick={decrement}>
        -
      </Button>
      <div>{value}</div>
      <Button type="button" onClick={increment}>
        +
      </Button>
    </div>
  );
};
