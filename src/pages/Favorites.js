import { useContext } from "react";
import MeetupsList from "../components/meetups/meetups-list/MeetupsList";
import FavoritesContext from "../store/FavoritesContext";

function FavoritesPage() {

    const favoritesCtx = useContext(FavoritesContext);

    const favoriteMeetups = favoritesCtx.favorites;

    // console.log('>> favoritesCtx', favoritesCtx);


    return (<div>
        <h3>Your Favorite Meetups will appear here</h3>
        {favoriteMeetups.length === 0 && <p>No Favorite Meetups added yet</p>}
        <MeetupsList meetups={favoriteMeetups} />
    </div>)
}

export default FavoritesPage;
