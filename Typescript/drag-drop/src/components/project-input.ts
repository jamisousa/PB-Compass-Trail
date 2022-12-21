import {Component} from './base-components.js';
import {Validatable, validate} from '../util/validation.js';
import {autobind} from '../decorators/autobinder.js';
import {projectState} from '../state/project-state.js';

  //when ProjectInput is instanciated, render the html form
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{ 
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor(){
        super('project-input', 'app', true, 'user-input');

        // this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        // this.hostElement = document.getElementById('app')! as HTMLDivElement;

        // const importedNode = document.importNode(this.templateElement.content, true);
        // this.element = importedNode.firstElementChild as HTMLFormElement; //form
        // this.element.id = 'user-input'; //reach the element and add user-input id
        
        //import content and store the first element in the template on the element property
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
    }

    configure(){
        this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent(){}

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
            min:0,
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
            projectState.addProject(title, desc, people);
            console.log(title,desc,people);
        }

        this.clearInputs();

    }
    
    attach(){
        this.hostElement.insertAdjacentElement('afterbegin', this.element); //insert the content after the opening tag
    }

}

