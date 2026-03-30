import { useSelector } from 'react-redux';
import {
  selectCartFullItems,
  selectCartTotalCount,
  selectCartTotalPrice,
} from '../../redux/entities/cart/slice';
import styles from './Cart.module.css';

export const Cart = () => {
  const cartItems = useSelector(selectCartFullItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalCount = useSelector(selectCartTotalCount);

  return (
    <div className={styles['cartWrapper']}>
      <h3 className={styles['cartTitle']}>Корзина</h3>
      {totalCount > 0 ? (
        <div className={styles['cartInner']}>
          <p className={styles['cartCount']}>
            Количество позиций: {totalCount}
          </p>
          {cartItems.length > 0 && (
            <ul className={styles['cartList']}>
              {cartItems.map((item) => (
                <li key={item.id} className={styles['cartItemList']}>
                  {item.name} * {item.quantity} = {item.total}$
                </li>
              ))}
            </ul>
          )}
          <p className={styles['cartTotalPrice']}>Итого: {totalPrice}$</p>
        </div>
      ) : (
        <p className={styles['cartEmpty']}>В корзине пока пусто</p>
      )}
    </div>
  );
};
