import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import { useContext } from "react";
import FavoritesContext from '../../store/favorites-context';

const Navigation = () => {

    const favoritesCtx = useContext(FavoritesContext);

    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <Link to="/"><li>All Meetups</li></Link>
                    <Link to="/new-meetup"><li>Add new meetup</li></Link>
                    <Link to="/favorites">
                        <li>Favorites meetups
                        <span className={classes.badge}>
                            {favoritesCtx.totalFavorites}
                        </span>
                        </li></Link>
                </ul>
            </nav>
        </header>

    );
};

export default Navigation;