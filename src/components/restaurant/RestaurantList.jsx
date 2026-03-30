import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllRestaurants } from '../../redux/entities/restaurants/slice';
import styles from '../Tabs/Tabs.module.css';
import { Restaurant } from './restaurant';
import { Cart } from '../Cart/Cart';

export const RestaurantList = () => {
  const restaurants = useSelector(selectAllRestaurants);

  const [activeId, setActiveId] = useState(restaurants[0].id);

  if (!restaurants || restaurants.length === 0) {
    return <div>Рестораны не найдены</div>;
  }
  const handleTabClick = (id) => {
    if (id === activeId) return;
    setActiveId(id);
  };

  return (
    <div className={styles['tabsContainer']}>
      <div className={styles['tabsHeader']}>
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => handleTabClick(restaurant.id)}
            className={`${styles['tabButton']} ${activeId === restaurant.id ? styles['active'] : ''}`}
          >
            {restaurant.name}
          </button>
        ))}
      </div>
      <div className={styles['tabsContent']}>
        <div className={styles['contentInner']}>
          <Restaurant id={activeId} />
          <Cart />
        </div>
      </div>
    </div>
  );
};
