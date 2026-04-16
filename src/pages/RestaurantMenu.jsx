import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { DishList } from '../components/DishList/DishList';
import { getDishes } from '../redux/entities/dishes/get-dishes';
import { useEffect } from 'react';
import {
  selectAllDishes,
  selectRequestDishesStatus,
} from '../redux/entities/dishes/slice';
import {
  idleStatus,
  lodaingStatus,
  rejectedStatus,
} from '../constants/statusLoad';

export const RestaurantMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const dishes = useSelector(selectAllDishes);
  const requestStatus = useSelector(selectRequestDishesStatus);

  useEffect(() => {
    dispatch(getDishes(id));
  }, [dispatch, id]);

  if (requestStatus === idleStatus || requestStatus === lodaingStatus) {
    return <div className="status">Загружаем меню...</div>;
  }

  if (requestStatus === rejectedStatus) {
    return <div className="status">Ошибка загрузки меню</div>;
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
