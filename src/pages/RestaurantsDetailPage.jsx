import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router';
import { selectRestaurantById } from '../redux/entities/restaurants/slice';
import styles from './RestaurantsDetailPage.module.css';
import { Button } from '../components/Button/Button';
import { Cart } from '../components/Cart/Cart';
import { selectRequestStatus } from '../redux/entities/dishes/slice';
import { useEffect } from 'react';
import { getDishes } from '../redux/entities/dishes/get-dishes';

export const RestaurantsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const requestStatus = useSelector(selectRequestStatus);

  useEffect(() => {
    dispatch(getDishes(id));
  }, [dispatch, id]);

  if (requestStatus === 'idle' || requestStatus === 'pending') {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Button onClick={() => navigate('/restaurants')}>Назад к списку</Button>
      <h2>{restaurant.name}</h2>
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
