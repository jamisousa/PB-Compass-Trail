import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from 'react';

const AllMeetupsPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(()=>{
      setIsLoading(true);
      fetch('https://react-http-d9cd2-default-rtdb.firebaseio.com/meetups.json'
      ).then(response=>{
        return response.json();
      }).then(data=>{
        setIsLoading(false);
        const meetups = [];
        for(const key in data){
          const meetup={
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }
        setLoadedMeetups(meetups);
      });
    },[]);

    if(isLoading){
      return <section><p>Loading...</p></section>
    }

    return(
        <section>
            <h1>All meetups</h1>
            <MeetupList meetups={loadedMeetups}></MeetupList>
        </section>
    );
}

export default AllMeetupsPage;