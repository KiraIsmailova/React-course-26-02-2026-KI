import { restaurants } from '../../materials/mock';
import { RestaurantsPage } from './restaurantsPage/RestaurantsPage';
import { Layout } from './layout/layout';

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage items={restaurants} />
    </Layout>
  );
};
