//validation logic
interface Validatable{
    value: string | number;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validate(validatableinput: Validatable){
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

//autobind decorator
function autobind(target:any, methodName:string,descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value; //store the method
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };

    return adjDescriptor;
}

//render the gathered content in a list
class ProjectList{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement; 
    element: HTMLElement; //is a section

    //getting access to core elements
    constructor(private type: 'active' | 'finished'){
        this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        //import content and store the first element in the template on the element property
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLElement; 
        this.element.id = `${this.type}-project`; //either active or finished project
        this.attach(); //attach to the DOM
        this.renderContent();
    }

    //fill the blank spaces of the template
    private renderContent(){   
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';

    }

    private attach(){
        this.hostElement.insertAdjacentElement('beforeend', this.element); //insert the content before the closing tag
    }
}


//when ProjectInput is instanciated, render the html form
class ProjectInput{ 
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor(){
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement; //form
        this.element.id = 'user-input'; //reach the element and add user-input id
        
        //import content and store the first element in the template on the element property
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
        this.attach();
    }

    // //trigger whenever the form is submitted - no decorator
    // private submitHandler(event: Event){
    //     event.preventDefault();
    //     console.log(this.titleInputElement.value);

    // }

    // private configure(){
    //     this.element.addEventListener('submit', this.submitHandler.bind(this));
    // }



//triger whenever the form is submitted - using  decorators
    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValidatable: Validatable = {
            value: enteredTitle,
            required: true,
            minLength:1,
            maxLength:10
        };

        const descriptionValidatable: Validatable = {
            value: enteredDescription,
            required: true,
            minLength:1,
            maxLength:50
        };

        const peopleValidatable: Validatable = {
            value: +enteredPeople,
            required: true,
            min:1,
            max:5
        };

        //validate entered values with a function
        if(
               !validate(titleValidatable) 
            || !validate(descriptionValidatable)
            || !validate(peopleValidatable)
        ){
            alert('Invalid input, please try again.');
            return;
        }else{
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }

    //clear data provided after submitting forms
    private clearInputs(){
        this.titleInputElement.value ='';
        this.descriptionInputElement.value ='';
        this.peopleInputElement.value ='';
    }

    @autobind
    private submitHandler(event: Event){
        event.preventDefault();
        const userInput = this.gatherUserInput();
        
        //check if we've received a tuple
        if(Array.isArray(userInput)){
            const [title,desc,people] = userInput;
            console.log(title,desc,people);
        }

        this.clearInputs();

    }

    private configure(){
        this.element.addEventListener('submit', this.submitHandler);
    }

    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin', this.element); //insert the content after the opening tag
    }

}

const prjInput = new ProjectInput();
const activeprjList = new ProjectList('active');
const finisheprjList = new ProjectList('finished');
