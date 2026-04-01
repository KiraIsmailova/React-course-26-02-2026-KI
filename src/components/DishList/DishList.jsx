import { useSelector } from 'react-redux';
import { selectDishesById } from '../../redux/entities/dishes/slice';
import styles from './DishList.module.css';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { DishCounter } from '../DishCounter/DishCounter';

export const DishList = ({ dishId }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const dish = useSelector((state) => selectDishesById(state, dishId));

  if (!dish) {
    return <p>Блюда скоро добавят</p>;
  }

  return (
    <div className={styles.dishWrapper}>
      <li
        className={styles.dishItem}
        key={dishId}
        onClick={() => navigate(`/dish/${dishId}`)}
      >
        {dish.name}
      </li>
      {isAuthenticated && <DishCounter id={dishId} />}
    </div>
  );
};
