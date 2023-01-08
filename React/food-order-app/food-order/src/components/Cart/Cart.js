import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {

    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item,amount:1});
    };

    const cartItems = <ul className={styles['cart-items']}>{
          cartCtx.items.map(item => 
          <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}></CartItem>
          )}
          </ul>;

    const orderHandler = () =>{
        setIsCheckout(true);
    }

    const ModalActions= <div className={styles.actions}>
    <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
    {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}</div>
    
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose}></Checkout>}
            {!isCheckout && ModalActions}
        
        </Modal>
    );
};

export default Cart;