import useInput from '../hooks/use-input';

const BasicForm = (props) => {

  const
    {
      value: entName,
      hasError: entNameHasError,
      isValid: entNameIsValid,
      valueChangeHandler: nameChangeHandler,
      InputBlurHandler: nameBlurHandler,
      reset: resetName
    } = useInput(value => value.trim() !== '')

  const
    {
      value: entLastName,
      hasError: entLastNameHasError,
      isValid: entLastNameIsValid,
      valueChangeHandler: lastNameChangeHandler,
      InputBlurHandler: lastNameBlurHandler,
      reset: resetLastName
    } = useInput(value => value.trim() !== '')

  const
    {
      value: entEmail,
      hasError: entEmailHasError,
      isValid: entEmailIsValid,
      valueChangeHandler: emailChangeHandler,
      InputBlurHandler: emailBlurHandler,
      reset: resetEmail
    } = useInput(value => value.trim() !== '' && value.trim().includes('@'));

  
  let formIsValid = false;

  if(entNameIsValid && entLastNameIsValid && entEmailIsValid){
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if(!entNameIsValid && !entLastNameIsValid && !entEmailIsValid){
      return;
    }

    resetName();
    resetLastName();
    resetEmail();

  }

  const nameInputClasses = entNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = entLastNameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = entEmailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} />
          {entNameHasError && <p className="error-text">Name is invalid!</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {entLastNameHasError && <p className="error-text">Last name is invalid!</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {entEmailHasError && <p className="error-text">E-mail is invalid!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
