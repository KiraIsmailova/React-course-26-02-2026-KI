import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/reviews/slice';
import {
  selectRequestUsersStatus,
  selectUsersById,
} from '../../redux/entities/users/slice';
import styles from './Reviews.module.css';
import {
  idleStatus,
  lodaingStatus,
  rejectedStatus,
} from '../../constants/statusLoad';

export const Reviews = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const user = useSelector((state) =>
    review?.userId ? selectUsersById(state, review.userId) : null
  );
  const requestStatus = useSelector(selectRequestUsersStatus);

  if (requestStatus === idleStatus || requestStatus === lodaingStatus) {
    return <div className="status">Загружаем отзывы</div>;
  }

  if (requestStatus === rejectedStatus) {
    return (
      <div className="status">Упс! Произошла ошибка получения отзывов...</div>
    );
  }

  return (
    <div>
      <div className={styles.reviewsUser}>
        <li key={reviewId}>{user?.name || 'Anonim'}</li>
      </div>
      <p className={styles.reviewsUserText}>{review.text}</p>
      <p className={styles.reviewsUserMark}>{review.rating}</p>
    </div>
  );
};
