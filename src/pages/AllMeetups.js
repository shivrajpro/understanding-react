import { useEffect, useState } from "react";
import MeetupsList from "../components/meetups/meetups-list/MeetupsList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);

    // if we write the code outside useEffect then the component will try to render infinitely;
    // as everytime the state changes isLoading flag starts with false;
    useEffect(() => {
        setIsLoading(true);

        fetch('https://react-getting-started-45c95-default-rtdb.firebaseio.com/meetups.json')
            .then(
                (response) => {
                    // console.log('>> response', response);
                    // console.log('>> response.json()', response.json());

                    return response.json();
                }
            ).then((data) => {
                // console.log('>> data', data);
                // map the response object to array

                const loadedMeetups = [];

                for (const key in data) {
                    const m = {
                        id: key,
                        ...data[key]
                    }

                    loadedMeetups.push(m);
                }

                console.log('>> loadedMeetups', loadedMeetups);
                setIsLoading(false);
                setMeetups(loadedMeetups);
            })
    }, []);

    if (isLoading) {
        return (
            <section>
                {/* <p>Loading...</p> */}
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </section>
        )
    }

    if (meetups.length === 0)
        return (
            <section>
                <p>No meetups to show</p>
            </section>
        )

    return (
        <section>
            <h1>All Meetups</h1>
            {/* {[<li>Item 1</li>, <li>Item 2</li>]}this is valid */}
            {/* <ul>
            {
                DUMMY_DATA.map((meetup)=>{
                    return <li key={meetup.id} > {meetup.title} </li>
                })
            }
            </ul> */}
            <MeetupsList meetups={meetups} />
        </section>
    )
}

export default AllMeetupsPage;