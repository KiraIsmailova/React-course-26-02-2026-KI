import { useSelector } from 'react-redux';
import { selectDishesById } from '../../redux/entities/dishes/slice';
import { DishCounter } from '../DishCounter/DishCounter';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import styles from './Dish.module.css';

export const Dish = ({ dishId }) => {
  const { isAuthenticated } = useContext(AuthContext);

  const dish = useSelector((state) => selectDishesById(state, dishId));

  if (!dish) {
    return <p>Блюда скоро добавят</p>;
  }

  return (
    <div className={styles['dishWrapper']}>
      <li className={styles['dishItem']} key={dishId}>
        {dish.name}
      </li>
      <div className={styles['dishItemInner']}>
        <p className={styles['dishPrice']}>Цена: {dish.price}$</p>
        <p className={styles['dishCompound']}>Состав: {dish.ingredients}</p>
        {isAuthenticated && <DishCounter id={dishId} />}
      </div>
    </div>
  );
};
