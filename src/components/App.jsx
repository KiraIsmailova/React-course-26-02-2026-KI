import { ProgressBar } from './ProgressBar/ProgressBar';
import { ThemeProvider } from './ThemeContext/ThemeProvider';
import { Layout } from './layout/layout';
import { AuthProvider } from './AuthContext/AuthProvider';
import { PlaceholderText } from './PlaceholderText/PlaceholderText';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { RestaurantList } from './restaurant/RestaurantList';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Layout>
            <ProgressBar />
            <RestaurantList />
            <PlaceholderText />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};
