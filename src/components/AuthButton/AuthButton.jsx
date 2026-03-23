import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import styles from './AuthButton.module.css';
import { Button } from '../Button/Button';

export const AuthButton = () => {
  const { user, isAuthenticated, login, logout } = useContext(AuthContext);
  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.userBlock}>
          <span className={styles.userName}>
            {user.avatar} {user.name}
          </span>

          <Button onClick={logout}>Выйти</Button>
        </div>
      ) : (
        <Button onClick={login}>Войти</Button>
      )}
    </div>
  );
};
