import MeetupItem from "../meetup-item/MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupsList(props) {
    return (
        <ul className={classes.list}>
            {
                props.meetups.map((m) => <MeetupItem
                    key={m.id}
                    meetup={m}
                />)
            }
        </ul>
    )
}

export default MeetupsList;