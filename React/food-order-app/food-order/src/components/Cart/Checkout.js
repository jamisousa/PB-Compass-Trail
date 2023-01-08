import styles from './Checkout.module.css';

const Checkout = props => {

    const confirmHandler = (event) => {
        event.preventDefault();
    };

    return(
        <form onSubmit={confirmHandler}>
            <div className={styles.control}>
                <label htmlFor='name'>Your name</label>
                <input type="text" id='name'></input>
            </div>
            <div className={styles.control}>
                <label htmlFor='street'>Street</label>
                <input type="text" id='street'></input>
            </div>
            <div className={styles.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type="text" id='postal'></input>
            </div>
            <div className={styles.control}>
                <label htmlFor='city'>City</label>
                <input type="text" id='city'></input>
            </div>
            <button type="button" onCLick={props.onCancel}>Cancel</button>
            <button>Confirm</button>

        </form>
    );
};

export default Checkout;