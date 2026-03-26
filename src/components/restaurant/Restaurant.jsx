import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { RestaurantChildComponent } from './RestaurantChildComponent';

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }
  return <RestaurantChildComponent {...restaurant} />;
};
