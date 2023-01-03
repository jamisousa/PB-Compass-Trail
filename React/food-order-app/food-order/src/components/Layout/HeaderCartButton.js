import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import {useContext, useEffect, useState} from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

    const [btnIsHighlighted, setBtnIsHighlited] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce(
        (curNumber, item)=>{
            return curNumber + item.amount;
        }
        , 0);

    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;
    
    const {items} = cartCtx;

    useEffect(()=>{
        if(cartCtx.items.length === 0){
            return;
        }
        setBtnIsHighlited(true);

        const timer = setTimeout(()=>{
            setBtnIsHighlited(false);
        },300);

        return () => {
            clearTimeout(timer);
        };
        
    },[items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon></CartIcon>
            </span>

            <span>
                Your Cart
            </span>

            <span className={styles.badge}>
                <numberOfCartItems></numberOfCartItems>
            </span>
        </button>
    );
};

export default HeaderCartButton;