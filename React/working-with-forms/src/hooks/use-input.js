import {useReducer} from 'react';

const initialInputState = {
  value: '',
  isTouched: false

}

const inputStateReducer = (state, action) => {
  if(action.type === 'CHANGE'){
    return {value: action.value, isTouched: state.isTouched}
  }

  if(action.type==='BLUR'){
    return {value: state.value, isTouched: true}
  }

  if(action.type === 'RESET'){
    return initialInputState;
  }

  return initialInputState;
};


const useInput = (validateValue) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = event => {
        dispatch({type: 'CHANGE', value:event.target.value});
      }

    const InputBlurHandler = event => {
      dispatch({type: 'BLUR'});
      }

    const reset = () => {
      dispatch({type: 'RESET'});

    }
  
    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        InputBlurHandler,
        reset
    };
};

export default useInput;