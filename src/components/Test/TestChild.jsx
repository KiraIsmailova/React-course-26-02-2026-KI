// TestChild.jsx
import { DishCounter } from '../DishCounter/DishCounter';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const TestChild = ({ id, name, menu, reviews }) => {
  if (!name) {
    return <div>Не найдено</div>;
  }

  return (
    <div>
      <h2>{name}</h2>

      <div>
        <h3>Отзывы (ID):</h3>
        {reviews && reviews.length > 0 ? (
          <ul>
            {reviews.map((reviewId) => (
              <li key={reviewId}>{reviewId}</li>
            ))}
          </ul>
        ) : (
          <p>Отзывы скоро появятся</p>
        )}
        <ReviewForm key={`form-${id}`} />
      </div>

      <div>
        <h3>Меню (ID):</h3>
        {menu && menu.length > 0 ? (
          <ul>
            {menu.map((dishId) => (
              <li key={dishId}>
                {dishId}
                <DishCounter id={dishId} />
              </li>
            ))}
          </ul>
        ) : (
          <p>Меню скоро появится</p>
        )}
      </div>
    </div>
  );
};
