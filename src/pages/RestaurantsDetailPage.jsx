import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router';
import {
  selectRequestRestaurantStatus,
  selectRestaurantById,
} from '../redux/entities/restaurants/slice';
import styles from './RestaurantsDetailPage.module.css';
import { Button } from '../components/Button/Button';
import { Cart } from '../components/Cart/Cart';
import { useEffect } from 'react';
import { getRestaurantById } from '../redux/entities/restaurants/get-restaurants';
import {
  idleStatus,
  lodaingStatus,
  rejectedStatus,
} from '../constants/statusLoad';

export const RestaurantsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const requestStatus = useSelector(selectRequestRestaurantStatus);

  useEffect(() => {
    if (id) {
      dispatch(getRestaurantById(id));
    }
  }, [dispatch, id]);

  if (requestStatus === idleStatus || requestStatus === lodaingStatus) {
    return <div>Загружаем детальную страницу...</div>;
  }

  if (requestStatus === rejectedStatus) {
    return (
      <div>
        Ошибка загрузки! Не удалось получить детальную информацию о ресторане
      </div>
    );
  }

  return (
    <div>
      <Button onClick={() => navigate('/restaurants')}>Назад к списку</Button>
      <h2>{restaurant?.name}</h2>
      <Button
        style={{ marginRight: '10px' }}
        onClick={() => navigate(`/restaurants/${id}/menu`)}
      >
        Menu
      </Button>
      <Button onClick={() => navigate(`/restaurants/${id}/reviews`)}>
        Reviews
      </Button>
      <div className={styles.restaurantDetailInner}>
        <div className={styles.detailContent}>
          <Outlet />
        </div>
        <Cart />
      </div>
    </div>
  );
};
