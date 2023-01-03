import React, {Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = props => {

    return(
        <React.Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton></HeaderCartButton>
            </header>

            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table full of food!"></img>
            </div>
        </React.Fragment>
    );

};

export default Header;