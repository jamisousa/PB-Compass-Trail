import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom';

const NewMeetupPage = () => {

    const navigate = useNavigate();

    const addMeetupHandler = (meetupData) => {
        fetch(
          'https://react-http-d9cd2-default-rtdb.firebaseio.com/meetups.json',
          {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then(()=>{
            navigate('/');
        });
      }


    return(
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        </section>
    );
}

export default NewMeetupPage;