import { CustomFooter } from '../CustomFooter/CustomFooter';
import { CustomHeader } from '../CustomHeader/CustomHeader';
import styles from './layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div>
      <CustomHeader />
      <main className={styles['customMain']}>{children}</main>
      <CustomFooter />
    </div>
  );
};
