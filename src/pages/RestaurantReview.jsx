import { useParams } from 'react-router';
import styles from './RestaurantsDetailPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Reviews } from '../components/Reviews/Reviews';
import { ReviewForm } from '../components/ReviewForm/ReviewForm';
import { useEffect } from 'react';
import { getReviews } from '../redux/reviews/get-reviews';
import {
  selectAllReviews,
  selectRequestReviewStatus,
} from '../redux/reviews/slice';
import { getUsers } from '../redux/entities/users/get-users';
import {
  idleStatus,
  lodaingStatus,
  rejectedStatus,
} from '../constants/statusLoad';

export const RestaurantReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const review = useSelector(selectAllReviews);
  const requestStatus = useSelector(selectRequestReviewStatus);

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (requestStatus === idleStatus || requestStatus === lodaingStatus) {
    return <div className="status">Загружаем отзывы...</div>;
  }

  if (requestStatus === rejectedStatus) {
    return <div className="status">Упс! Ошибка загрузки</div>;
  }

  return (
    <div>
      <div className={styles.detailContentWrap}>
        <div className={styles.detailContent}>
          <ul>
            {review?.map((review) => (
              <Reviews key={review.id} reviewId={review.id} />
            ))}
            <ReviewForm key={`form-${id}`} restaurantId={id} />
          </ul>
        </div>
      </div>
    </div>
  );
};
