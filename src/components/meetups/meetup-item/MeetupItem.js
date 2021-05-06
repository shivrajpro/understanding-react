import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
    const item = props.meetup;

    return (
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
                <button>To Favorites</button>
            </div>
        </li>
    )
}

export default MeetupItem;