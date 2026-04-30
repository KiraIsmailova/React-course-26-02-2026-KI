import { useSelector } from 'react-redux';
import styles from './CartIcon.module.css';
import { selectCartTotalCount } from '../../redux/entities/cart/slice';

export const CartIcon = ({ onClick }) => {
  const totalCount = useSelector(selectCartTotalCount);
  return (
    <div onClick={onClick} className={styles.cartIconWrap}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 14 16 C 14 4, 34 4, 34 16" />
        <path d="M 12 16 L 36 16 L 34 40 L 14 40 Z" />
      </svg>
      <div className={styles.cartTotalWrap}>
        <p className={styles.cartTotalCounter}>{totalCount}</p>
      </div>
    </div>
  );
};
