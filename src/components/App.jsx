import { restaurants } from "../../materials/mock";

export const App = () => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <div key={restaurant.id}>
          <h1>Ресторан № {index + 1} - {restaurant.name}</h1>
          <h3>Меню:</h3>
          <div>
            {restaurant.menu.map((itemMenu) => (
              <ul key={itemMenu.id}>
                <li>{itemMenu.name}</li>
              </ul>
            ))}
          </div>
          <h3>Отзывы:</h3>
          <div>
            {restaurant.reviews.map((itemReview) => (
              <ul key={itemReview.id}>
                <li>{itemReview.text}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};