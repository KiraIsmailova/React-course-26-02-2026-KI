import { useParams } from 'react-router';
import styles from './RestaurantsDetailPage.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../redux/entities/restaurants/slice';
import { Reviews } from '../components/Reviews/Reviews';
import { ReviewForm } from '../components/ReviewForm/ReviewForm';

export const RestaurantReview = () => {
  const { id } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  return (
    <div>
      <div className={styles.detailContentWrap}>
        <div className={styles.detailContent}>
          <ul>
            {restaurant.reviews.map((reviewId) => (
              <Reviews key={reviewId} reviewId={reviewId} />
            ))}
            <ReviewForm key={`form-${id}`} />
          </ul>
        </div>
      </div>
    </div>
  );
};
