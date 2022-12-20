// drag & drop interfaces
interface Draggable{
    dragStartHandler(event: DragEvent):void;
    dragEndHandler(event: DragEvent):void;
}

interface DragTarget{
    dragOverHandler(event: DragEvent):void;
    dropHandler(event: DragEvent):void;
    dragLeaveHandler(event:DragEvent):void;
}


//project type
enum ProjectStatus{active, finished};


class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
    ) {}
}

//project state management

type Listener<T> = (items: T[]) => void;

class State<T>{
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>){
        this.listeners.push(listenerFn);
    }
}

class ProjectState extends State<Project>{
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor(){
        super();
    }

    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    
    addProject(title:string, description:string, numOfPeople:number){
        const newProject = new Project(
            Math.random().toString(), 
            title,
            description, 
            numOfPeople, 
            ProjectStatus.active);

        this.projects.push(newProject);
        this.updateListeners();

        for (const listenerFn of this.listeners){
            listenerFn(this.projects.slice());
        }

    }

    moveProject(projectId:string, newStatus:ProjectStatus){
       const project =  this.projects.find(prj=>prj.id === projectId);
       
       if(project && project.status !== newStatus){
        project.status = newStatus;
        this.updateListeners();
       }

    }

    private updateListeners(){
        for (const listenerFn of this.listeners){
            listenerFn(this.projects.slice());
        }
    }

}

const projectState = ProjectState.getInstance();


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

//Component base abstract class using generics
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;
  
    constructor(
      templateId: string,
      hostElementId: string,
      insertAtStart: boolean,
      newElementId?: string
    ) {
      this.templateElement = document.getElementById(
        templateId
      )! as HTMLTemplateElement;
      this.hostElement = document.getElementById(hostElementId)! as T;
  
      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );
      this.element = importedNode.firstElementChild as U;
      if (newElementId) {
        this.element.id = newElementId;
      }
  
      this.attach(insertAtStart);
    }
  
    attach(insertAtBeginning: boolean) {
      this.hostElement.insertAdjacentElement(
        insertAtBeginning ? 'afterbegin' : 'beforeend',
        this.element
      );
    }
  
    abstract configure(): void;
    abstract renderContent(): void;
  }

//projectitem class - rendering an itm
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable{
    private project: Project;

    get people(){
        if(this.project.people === 1){
            return '1 person';
        }else{
            return `${this.project.people} people`;
        }
    }
  
    constructor(hostId: string, project: Project) {
      super('single-project', hostId, false, project.id);
      this.project = project;
  
      this.configure();
      this.renderContent();
    }

    @autobind
    dragStartHandler(event: DragEvent) {
        event.dataTransfer!.setData('text/plain', this.project.id);
        event.dataTransfer!.effectAllowed = 'move';
    }

    dragEndHandler(event: DragEvent) {
        console.log('DragEnd');
        
    }
  
    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
  
    renderContent() {
      this.element.querySelector('h2')!.textContent = this.project.title;
      this.element.querySelector('h3')!.textContent = this.people + ' assigned.';
      this.element.querySelector('p')!.textContent = this.project.description;
    }
  }

//render the gathered content in a list
class ProjectList extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget {
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  @autobind
  dragOverHandler(event: DragEvent) {
    if(event.dataTransfer && event.dataTransfer.types[0]==='text/plain'){
        event.preventDefault();
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.add('droppable');
    }
    
  }

  @autobind
  dropHandler(event: DragEvent) {
     const prjId = event.dataTransfer!.getData('text/plain');
    projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.active : ProjectStatus.finished);
  }

  @autobind
  dragLeaveHandler(_: DragEvent) {
    const listEl = this.element.querySelector('ul')!;
    listEl.classList.remove('droppable');
  }

  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
    this.element.addEventListener('drop', this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter(prj => {
        if (this.type === 'active') {
          return prj.status === ProjectStatus.active;
        }
        return prj.status === ProjectStatus.finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' PROJECTS';
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = '';
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
    }
  }
}

//when ProjectInput is instanciated, render the html form
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{ 
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

const prjInput = new ProjectInput();
const activeprjList = new ProjectList('active');
const finisheprjList = new ProjectList('finished');
