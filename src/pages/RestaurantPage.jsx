import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllRestaurants,
  selectRequestStatus,
} from '../redux/entities/restaurants/slice';
import { useNavigate } from 'react-router';
import styles from '../components/Tabs/Tabs.module.css';
import { Button } from '../components/Button/Button';
import { useEffect } from 'react';
import { getRestaurants } from '../redux/entities/restaurants/get-restaurants';

export const RestaurantPage = () => {
  const dispatch = useDispatch();

  const restaurants = useSelector(selectAllRestaurants);
  const requestStatus = useSelector(selectRequestStatus);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (requestStatus === 'idle' || requestStatus === 'pending') {
    return <div>loading...</div>;
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
