import { restaurants } from '../../materials/mock';
import { RestaurantCard } from './restaurant/RestaurantCard';
import { Layout } from './layout/layout';

export const App = () => {
  return (
    <Layout>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          index={index}
        />
      ))}
    </Layout>
  );
};
