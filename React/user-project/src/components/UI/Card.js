import styles from './Card.module.css';

function Card(props){
    return (
        <div className={`${styles.card} ${props.className}`}>
            {/* get content between <card></card> */}
            {props.children}
        </div>
    );
}

export default Card;