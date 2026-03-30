import { useNavigate } from 'react-router';
import { Button } from '../components/Button/Button';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleGoToRestaurants = () => {
    navigate('restaurant');
  };
  return (
    <div className={styles['homePageWrapper']}>
      <h1 className={styles['homePageTitle']}>Добро пожаловать!</h1>
      <p className={styles['homePageSubtitle']}>
        Вы на главной странице сервиса по подбору ресторанов и блюд
      </p>
      <Button onClick={handleGoToRestaurants}>
        Перейти к выбору ресторана
      </Button>
    </div>
  );
};
