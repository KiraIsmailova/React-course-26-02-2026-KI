import { useNavigate } from 'react-router';
import { Button } from '../components/Button/Button';
import styles from './HomePage.module.css';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { PlaceholderText } from '../components/PlaceholderText/PlaceholderText';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleGoToRestaurants = () => {
    navigate('restaurants');
  };
  return (
    <div>
      <ProgressBar />
      <div className={styles.homePageWrapper}>
        <h1 className={styles.homePageTitle}>Добро пожаловать!</h1>
        <p className={styles.homePageSubtitle}>
          Вы на главной странице сервиса по подбору ресторанов и блюд. Наш
          проект призван помочь вам выбирать самые лучшие рестораны и самые
          вкусные блюда
        </p>
        <Button onClick={handleGoToRestaurants}>
          Перейти к выбору ресторана
        </Button>
        <PlaceholderText />
      </div>
    </div>
  );
};
