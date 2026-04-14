import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { DishList } from '../components/DishList/DishList';
import { getDishes } from '../redux/entities/dishes/get-dishes';
import { useEffect } from 'react';
import {
  selectAllDishes,
  selectRequestStatus,
} from '../redux/entities/dishes/slice';

export const RestaurantMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const dishes = useSelector(selectAllDishes);
  const requestStatus = useSelector(selectRequestStatus);

  useEffect(() => {
    dispatch(getDishes(id));
  }, [dispatch, id]);

  if (requestStatus === 'idle' || requestStatus === 'pending') {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>
        <ul>
          {dishes.map((dish) => (
            <DishList key={dish.id} dishId={dish.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};
