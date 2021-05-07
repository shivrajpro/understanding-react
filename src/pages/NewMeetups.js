import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/forms/NewMeetupForm";

function NewMeetupsPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        // console.log('>> meetupData', meetupData);
        fetch('https://react-getting-started-45c95-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(
            () => {
                history.replace('/')
            }
        )
    }
    return (
        <div>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>)
}

export default NewMeetupsPage;
