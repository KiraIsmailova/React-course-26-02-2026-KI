import { useParams } from 'react-router';
import styles from './RestaurantsDetailPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Reviews } from '../components/Reviews/Reviews';
import { ReviewForm } from '../components/ReviewForm/ReviewForm';
import { useEffect } from 'react';
import { getReviews } from '../redux/reviews/get-reviews';
import { selectAllReviews, selectRequestStatus } from '../redux/reviews/slice';
import { getUsers } from '../redux/entities/users/get-users';

export const RestaurantReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const review = useSelector(selectAllReviews);
  const requestStatus = useSelector(selectRequestStatus);

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (requestStatus === 'idle' || requestStatus === 'pending') {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div className={styles.detailContentWrap}>
        <div className={styles.detailContent}>
          <ul>
            {review?.map((review) => (
              <Reviews key={review.id} reviewId={review.id} />
            ))}
            <ReviewForm key={`form-${id}`} />
          </ul>
        </div>
      </div>
    </div>
  );
};
