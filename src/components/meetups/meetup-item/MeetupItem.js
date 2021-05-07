import Card from "../../../layouts/UI/card/Card";
import FavoritesContext from "../../../store/FavoritesContext";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

function MeetupItem(props) {
    const item = props.meetup;

    const history = useHistory();
    const favoritesCtx = useContext(FavoritesContext);
    const isItemFavorite = favoritesCtx.itemIsFavorite(item.id);

    // console.log('>> favctx',favoritesCtx,'item',item);

    function toggleFavoriteHandler() {
        if (isItemFavorite) {
            favoritesCtx.removeFavorite(item.id);
        } else {
            favoritesCtx.addFavorite(item);
            history.replace('/favorites');
        }
    }
    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img className={classes} src={item.image} alt={item.title} />
                </div>
                <div className={classes.content}>
                    <h3> {item.title} </h3>
                    <address> {item.address} </address>
                    <p>{item.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteHandler} >{isItemFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </div>
            </li>
        </Card>
    )
}

export default MeetupItem;