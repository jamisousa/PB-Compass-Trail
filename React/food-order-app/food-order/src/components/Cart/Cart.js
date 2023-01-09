import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

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
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        const response = await fetch('https://react-http-26719-default-rtdb.firebaseio.com/orders.json',{
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItem: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    }

    const ModalActions= <div className={styles.actions}>
    <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
    {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}</div>
    
    const cartModalContent = <React.Fragment>
          {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}></Checkout>}
            {!isCheckout && ModalActions}
    </React.Fragment>

    const isSubmittingContent = <p>Sending order data...</p>

    const didSubmitModalContent = <p>Successfully sent the order!</p>

    return (
        <Modal onClose={props.onClose}>
          {!isSubmitting && !didSubmit && cartModalContent}
          {isSubmitting && isSubmittingContent}
          {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;