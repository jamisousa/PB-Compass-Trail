import classes from './MeetupItem.module.css';
import Card from '../UI/Card';
import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

const MeetupItem =(props) => {

    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    const toggleFavoriteStatusHandler = () => {
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id);
        }else{
            favoritesCtx.addFavorite({
                id:props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                adress:props.address
            })
        }
    }

    return(
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image}></img>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;