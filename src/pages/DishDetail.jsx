import { useContext, useEffect } from 'react';
import { AuthContext } from '../components/AuthContext/AuthContext';
import styles from '../components/DishList/DishList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishesById } from '../redux/entities/dishes/slice';
import { DishCounter } from '../components/DishCounter/DishCounter';
import { useNavigate, useParams } from 'react-router';
import { Button } from '../components/Button/Button';
import { Cart } from '../components/Cart/Cart';
import { getDishById } from '../redux/entities/dishes/get-dishes';

export const DishDetail = () => {
  const { dishId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useContext(AuthContext);

  const handleGoBack = () => {
    navigate(-1);
  };

  const dish = useSelector((state) => selectDishesById(state, dishId));

  useEffect(() => {
    if (dishId) {
      dispatch(getDishById(dishId));
    }
  }, [dispatch, dishId]);

  if (!dish) {
    return <div>Загрузка блюда...</div>;
  }

  return (
    <div className={styles.dishItemInner}>
      <div className={styles.dishDetailDescription}>
        <Button onClick={handleGoBack}>Назад к ресторану</Button>
        <h3>Подробнее о блюде</h3>
        <p className={styles.dishItem} key={dishId}>
          Название - {dish.name}
        </p>
        <p className={styles.dishPrice}>Цена: {dish.price}$</p>
        <p className={styles.dishCompoundTitle}>Состав: </p>
        {dish.ingredients.map((item) => (
          <p className={styles.dishCompound} key={item}>
            {item}
          </p>
        ))}
        {isAuthenticated && <DishCounter id={dishId} />}
      </div>
      <Cart />
    </div>
  );
};
