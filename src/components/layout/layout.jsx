import { Outlet } from 'react-router';
import { CustomFooter } from '../CustomFooter/CustomFooter';
import { CustomHeader } from '../CustomHeader/CustomHeader';
import styles from './layout.module.css';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

export const Layout = () => {
  return (
    <div>
      <CustomHeader />
      <main className={styles.customMain}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <CustomFooter />
    </div>
  );
};
