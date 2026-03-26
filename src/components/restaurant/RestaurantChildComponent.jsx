import { DishCounter } from '../DishCounter/DishCounter';
import { ReviewForm } from '../ReviewForm/ReviewForm';

import { Dish } from '../Dish/Dish';
import { Reviews } from '../Reviews/Reviews';

export const RestaurantChildComponent = ({ id, name, menu, reviews }) => {
  if (!name) {
    return <div>Рестораны пока не загружены</div>;
  }

  return (
    <div>
      <h3>Меню:</h3>
      {menu && menu.length > 0 ? (
        <ul>
          {menu.map((dishId) => (
            <Dish key={dishId} dishId={dishId} />
          ))}
        </ul>
      ) : (
        <p>Меню скоро появится</p>
      )}

      <h3>Отзывы:</h3>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((reviewId) => (
            <Reviews key={reviewId} reviewId={reviewId} />
          ))}
        </ul>
      ) : (
        <p>Отзывы скоро появятся</p>
      )}
      <ReviewForm key={`form-${id}`} />
    </div>
  );
};
