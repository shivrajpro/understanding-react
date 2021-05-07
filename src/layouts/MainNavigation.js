import { Link } from "react-router-dom";
import FavoritesContext from "../store/FavoritesContext";
import { useContext } from "react";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return <header className={classes.header}>
        <div className={classes.logo} >React Meetups</div>
        <ul>
            <li>
                <Link to='/' >AllMeetups</Link>
            </li>
            <li>
                <Link to='/newmeetups'>New Meetups</Link>
            </li>
            <li>
                <Link to='/favorites'>
                    My Favorites
                    <span className={classes.badge}>
                        {favoritesCtx.totalFavorites}
                    </span>
                </Link>
            </li>
        </ul>

    </header>
}

export default MainNavigation;