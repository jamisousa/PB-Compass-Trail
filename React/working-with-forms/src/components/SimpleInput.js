import {useState, useEffect} from 'react';

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid){
      formIsValid = true;
    }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  }

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  }
  
  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if(!enteredNameIsValid && !enteredEmailIsValid){
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
        <label htmlFor='email'>Your Email</label>
        <input value={enteredEmail} type='email' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
        {nameInputIsInvalid && <p>Name must not be empty!</p>}
        {emailInputIsInvalid && <p>Email is not valid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
