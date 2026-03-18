import { DishCounter } from '../DishCounter/DishCounter';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h3>Меню:</h3>
      {restaurant.menu && restaurant.menu.length > 0 ? (
        <ul>
          {restaurant.menu.map((itemMenu) => (
            <li key={itemMenu.id}>
              {itemMenu.name}
              <DishCounter />
            </li>
          ))}
        </ul>
      ) : (
        <p>Меню скоро появится</p>
      )}

      <h3>Отзывы:</h3>
      {restaurant.reviews && restaurant.reviews.length > 0 ? (
        <div>
          <ul>
            {restaurant.reviews.map((itemReview) => (
              <li key={itemReview.id}>{itemReview.text}</li>
            ))}
          </ul>
          <ReviewForm key={restaurant.reviews.id} />
        </div>
      ) : (
        <p>Отзывы скоро появятся</p>
      )}
    </div>
  );
};
