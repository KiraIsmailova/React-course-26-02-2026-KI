import { ThemeProvider } from './ThemeContext/ThemeProvider';
import { Layout } from './layout/layout';
import { AuthProvider } from './AuthContext/AuthProvider';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter, Route, Routes } from 'react-router';
import { RestaurantPage } from '../pages/RestaurantPage';
import { HomePage } from '../pages/HomePage';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="restaurant" element={<RestaurantPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};
