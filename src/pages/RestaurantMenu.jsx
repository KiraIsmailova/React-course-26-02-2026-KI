import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../redux/entities/restaurants/slice';
import { useParams } from 'react-router';
import { DishList } from '../components/DishList/DishList';

export const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  return (
    <div>
      <div>
        <ul>
          {restaurant.menu.map((dishId) => (
            <DishList key={dishId} dishId={dishId} />
          ))}
        </ul>
      </div>
    </div>
  );
};
