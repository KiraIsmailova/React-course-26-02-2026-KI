import { restaurants } from '../../materials/mock';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { Tabs } from './Tabs/Tabs';
import { ThemeProvider } from './ThemeContext/ThemeProvider';
import { Layout } from './layout/layout';
import { Restaurant } from './restaurant/restaurant';
import { AuthProvider } from './AuthContext/AuthProvider';
import { PlaceholderText } from './PlaceholderText/PlaceholderText';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { TestList } from './Test/TestList';

export const App = () => {
  const renderRestaurantContent = (restaurantData) => {
    return <Restaurant restaurant={restaurantData} key={restaurantData.id} />;
  };

  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Layout>
            <ProgressBar />
            <Tabs items={restaurants} renderContent={renderRestaurantContent} />
            <PlaceholderText />
            <TestList />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};
