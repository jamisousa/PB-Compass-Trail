import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {

    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0 ){
        content = <p>No favorites.</p>
    }else{
        content = <MeetupList meetups={favoritesCtx.favorites}></MeetupList>
    }

    return(
        <section>
            <h1>Favorites</h1>
            {content}
        </section>

    );
}

export default FavoritesPage;