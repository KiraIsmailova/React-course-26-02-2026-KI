import { PlaceholderText } from '../components/PlaceholderText/PlaceholderText';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { RestaurantList } from '../components/restaurant/RestaurantList';

export const RestaurantPage = () => {
  return (
    <div>
      <ProgressBar />
      <RestaurantList />
      <PlaceholderText />
    </div>
  );
};
