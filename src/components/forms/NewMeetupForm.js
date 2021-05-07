import Card from "../../layouts/UI/card/Card";
import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imgInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        const title = titleInputRef.current.value;
        const image = imgInputRef.current.value;
        const address = addressInputRef.current.value;
        const description = descriptionInputRef.current.value;

        const meetupData = {title, image, address, description};
        console.log('>> submit',meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmit} >
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' id='title' ref={titleInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='img'>Meetup Image</label>
                    <input type='url' id='img' ref={imgInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' id='address' ref={addressInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea rows='3' id='description' ref={descriptionInputRef} required />
                </div>
                <div className={classes.actions}>
                    <button type='submit' >Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;