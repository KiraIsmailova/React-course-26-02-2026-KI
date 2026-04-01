import { useSelector } from 'react-redux';
import { selectAllRestaurants } from '../redux/entities/restaurants/slice';
import { useNavigate } from 'react-router';
import styles from '../components/Tabs/Tabs.module.css';
import { Button } from '../components/Button/Button';

export const RestaurantPage = () => {
  const restaurants = useSelector(selectAllRestaurants);
  const navigate = useNavigate();

  if (!restaurants || restaurants.length === 0) {
    return <div>Рестораны не найдены</div>;
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
