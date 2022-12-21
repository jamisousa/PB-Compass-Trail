
        //validation logic
    export interface Validatable{
        value: string | number;
        required: boolean;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;
    }

   export function validate(validatableinput: Validatable){
        let isValid = true;

        if(validatableinput.required){
            //if length is not zero will return true, otherwise false
            isValid = isValid && validatableinput.value.toString().trim().length !== 0;
        }
        if(validatableinput.minLength != null && typeof validatableinput.value === 'string'){
            isValid = isValid && validatableinput.value.length > validatableinput.minLength;
        }
        if(validatableinput.maxLength != null && typeof validatableinput.value === 'string'){
            isValid = isValid && validatableinput.value.length < validatableinput.maxLength;
        }
        if(validatableinput.min != null && typeof validatableinput.value === 'number'){
            isValid = isValid && validatableinput.value > validatableinput.min;
        }
        if(validatableinput.max != null && typeof validatableinput.value === 'number'){
            isValid = isValid && validatableinput.value < validatableinput.max;
        }

        return isValid;

    }
