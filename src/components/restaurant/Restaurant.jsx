import { Counter } from '../counter/Counter';

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      {restaurant.menu && restaurant.menu.length > 0 ? (
        <ul>
          {restaurant.menu.map((itemMenu) => (
            <li key={itemMenu.id}>
              {itemMenu.name}
              <Counter />
            </li>
          ))}
        </ul>
      ) : (
        <p>Меню скоро появится</p>
      )}

      <h3>Отзывы:</h3>
      {restaurant.reviews && restaurant.reviews.length > 0 ? (
        <ul>
          {restaurant.reviews.map((itemReview) => (
            <li key={itemReview.id}>{itemReview.text}</li>
          ))}
        </ul>
      ) : (
        <p>Отзывы скоро появятся</p>
      )}
    </div>
  );
};
