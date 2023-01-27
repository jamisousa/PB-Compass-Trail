import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

const MeetupList = (props) => {
    return(
        <ul className={classes.list}>
            {props.meetups.map(meetup=><MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} description={meetup.description}></MeetupItem>)}
        </ul>
    );
}

export default MeetupList;