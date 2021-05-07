import Card from "../../layouts/UI/card/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {

    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' id='title' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='img'>Meetup Image</label>
                    <input type='url' id='img' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' id='address' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea rows='3' id='description' required />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;