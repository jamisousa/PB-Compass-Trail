import Card from "../UI/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button";
import React, {useState} from 'react';
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddUser(props){

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] =  useState();

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
            setError({
                title:'Invalid input',
                message:'Please input a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:'Invalid input',
                message:'Please input a valid age (>0).'
            });
            return;
        }
        
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
       
    }

    const errorHandler = () => {
        setError(null);
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return(
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
        </Wrapper>
    );

};

export default AddUser;