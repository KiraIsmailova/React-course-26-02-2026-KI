import { ThemeProvider } from './ThemeContext/ThemeProvider';
import { Layout } from './layout/layout';
import { AuthProvider } from './AuthContext/AuthProvider';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter, Route, Routes } from 'react-router';
import { RestaurantPage } from '../pages/RestaurantPage';
import { HomePage } from '../pages/HomePage';
import { RestaurantsDetailPage } from '../pages/RestaurantsDetailPage';
import { RestaurantMenu } from '../pages/RestaurantMenu';
import { RestaurantReview } from '../pages/RestaurantReview';
import { DishDetail } from '../pages/DishDetail';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="restaurants" element={<RestaurantPage />} />
                <Route
                  path="/restaurants/:id"
                  element={<RestaurantsDetailPage />}
                >
                  <Route index element={<RestaurantMenu />} />
                  <Route path="menu" element={<RestaurantMenu />} />
                  <Route path="reviews" element={<RestaurantReview />} />
                </Route>
                <Route path="/dish/:dishId" element={<DishDetail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};
