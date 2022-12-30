import Card from "../UI/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button";
import React, {useState, useRef} from 'react';
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddUser(props){

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] =  useState();

    const addUserHandler = (event) =>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 ){
            setError({
                title:'Invalid input',
                message:'Please input a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredUserAge < 1){
            setError({
                title:'Invalid input',
                message:'Please input a valid age (>0).'
            });
            return;
        }
        
        props.onAddUser(enteredName, enteredUserAge);
        // setEnteredUsername('');
        // setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value='';
       
    }

    const errorHandler = () => {
        setError(null);
    }

    return(
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" ref={nameInputRef}></input>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" ref={ageInputRef}></input>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
        </Wrapper>
    );

};

export default AddUser;