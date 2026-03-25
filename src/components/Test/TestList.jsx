import { useSelector } from 'react-redux';
import { Test } from './Test';
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice';

export const TestList = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  if (!restaurantIds || restaurantIds.length === 0) {
    return <div>Нет данных для отображения</div>;
  }

  return (
    <div className="restaurant-list">
      <h1>Все рестораны</h1>
      {restaurantIds.map((id) => (
        <div key={id}>
          <Test id={id} />
        </div>
      ))}
    </div>
  );
};
