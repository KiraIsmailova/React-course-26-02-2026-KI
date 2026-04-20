import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllRestaurants,
  selectRequestRestaurantStatus,
} from '../redux/entities/restaurants/slice';
import { useNavigate } from 'react-router';
import styles from '../components/Tabs/Tabs.module.css';
import { Button } from '../components/Button/Button';
import { useEffect } from 'react';
import { getRestaurants } from '../redux/entities/restaurants/get-restaurants';
import {
  idleStatus,
  lodaingStatus,
  rejectedStatus,
} from '../constants/statusLoad';

export const RestaurantPage = () => {
  const dispatch = useDispatch();

  const restaurants = useSelector(selectAllRestaurants);
  const requestStatus = useSelector(selectRequestRestaurantStatus);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (requestStatus === idleStatus || requestStatus === lodaingStatus) {
    return <div>Загружаем данные...</div>;
  }

  if (requestStatus === rejectedStatus) {
    return <div>Ошибка! Не удалось загрузить рестораны</div>;
  }

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsHeader}>
        {restaurants.map((restaurant) => (
          <Button
            key={restaurant.id}
            onClick={() => navigate(`/restaurants/${restaurant.id}`)}
          >
            {restaurant.name}
          </Button>
        ))}
      </div>
      <div className={styles.tabsContent}>
        <p className={styles.tabsDescription}>
          Выберите ресторан, чтобы посмотреть меню и отзывы
        </p>
      </div>
    </div>
  );
};
