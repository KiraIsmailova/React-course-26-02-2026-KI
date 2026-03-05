import { restaurants } from "../../materials/mock";
import { RestaurantCard } from "./restaurant/RestaurantCard";

export const App = () => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard 
          key={restaurant.id} 
          restaurant={restaurant} 
          index={index} 
        />
      ))}
    </div>
  );
};