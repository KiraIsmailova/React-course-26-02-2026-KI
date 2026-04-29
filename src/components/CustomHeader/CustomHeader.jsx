import styles from './CustomHeader.module.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { AuthButton } from '../AuthButton/AuthButton';
import { useNavigate } from 'react-router';
import image from '../../../public/main-logo.png';
import { CartIcon } from '../CartIcon/CartIcon';
import { CartModal } from '../CartModal/CartModal';
import { Cart } from '../Cart/Cart';

export const CustomHeader = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <header className={styles.customHeader}>
      <div className={styles.headerInner}>
        <div className={styles.headerLogo} onClick={() => navigate('/')}>
          <img src={image} />
        </div>
        <button onClick={toggleTheme} className={styles.toggleBtn}>
          {isDark ? '☀️ Переключить на светлую' : '🌙 Переключить на темную'}
        </button>
        <CartIcon onClick={openModal} />
        <CartModal isOpen={isModalOpen} onClose={closeModal}>
          <Cart />
        </CartModal>
        <AuthButton />
      </div>
    </header>
  );
};
