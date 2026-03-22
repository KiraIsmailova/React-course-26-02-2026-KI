import styles from './CustomHeader.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { AuthContext } from '../AuthContext/AuthContext';

export const CustomHeader = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { user, isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <header className={styles['customHeader']}>
      <div className={styles['headerInner']}>
        <p className={styles['headerLogo']}>It will be logo</p>

        <button onClick={toggleTheme} className={styles.toggleBtn}>
          {isDark ? '☀️ Переключить на светлую' : '🌙 Переключить на темную'}
        </button>

        {isAuthenticated ? (
          <div className={styles.userBlock}>
            <span className={styles.userName}>
              {user.avatar} {user.name}
            </span>
            <button onClick={logout} className={styles.logoutBtn}>
              Выйти
            </button>
          </div>
        ) : (
          <button onClick={login} className={styles.loginBtn}>
            Войти
          </button>
        )}
        <ul className={styles['headerList']}>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
    </header>
  );
};
