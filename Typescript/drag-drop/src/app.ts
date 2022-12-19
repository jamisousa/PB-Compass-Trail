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
        
        //store as properties of the class
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

        //validate entered values
        if(enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0 ){
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