import { Outlet } from 'react-router';
import { CustomFooter } from '../CustomFooter/CustomFooter';
import { CustomHeader } from '../CustomHeader/CustomHeader';
import styles from './layout.module.css';

export const Layout = () => {
  return (
    <div>
      <CustomHeader />
      <main className={styles['customMain']}>
        <Outlet />
      </main>
      <CustomFooter />
    </div>
  );
};
