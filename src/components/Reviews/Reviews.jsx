import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/reviews/slice';
import { selectUsersById } from '../../redux/entities/users/slice';

export const Reviews = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const user = useSelector((state) =>
    review?.userId ? selectUsersById(state, review.userId) : null
  );

  if (!review) {
    return <p>Отзывы скоро появятся</p>;
  }

  return (
    <div>
      <div>
        <li key={reviewId}>{user?.name}</li>
      </div>
      <p>{review.text}</p>
      <p>{review.rating}</p>
    </div>
  );
};
