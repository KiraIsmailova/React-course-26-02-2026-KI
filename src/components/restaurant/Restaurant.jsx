import { DishCounter } from '../DishCounter/DishCounter';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

export const Restaurant = ({ restaurant }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <h3>Меню:</h3>
      {restaurant.menu && restaurant.menu.length > 0 ? (
        <ul>
          {restaurant.menu.map((itemMenu) => (
            <li key={itemMenu.id}>
              {itemMenu.name}
              {isAuthenticated && <DishCounter />}
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
          <ReviewForm />
        </div>
      ) : (
        <p>Отзывы скоро появятся</p>
      )}
    </div>
  );
};
