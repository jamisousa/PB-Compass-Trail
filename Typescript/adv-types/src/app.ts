/* Working with advanced types */

//intersection
type Admin={
    name:string;
    privileges: string[];
};

type Employee={
    name:string;
    startDate:Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee={
    name:'Jam',
    privileges:['create-server'],
    startDate:new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;


// function add(a:Combinable, b:Combinable){
//     if(typeof a === 'string' || typeof b === 'string'){
//         return a.toString() + b.toString();
//     }
//     return a+b;
// }

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp:UnknownEmployee){
    console.log('Name:' + emp.name);
    if('privileges' in emp){
        console.log('Privilges: ' +emp.privileges);
    }
    if('startDate' in emp){
        console.log('Start date: ' + emp.startDate);
    }
}

printEmployeeInfo(e1);

console.log('---------------');

class Car{
    drive(){
        console.log('Driving...');
    }
}

class Truck{
    drive(){
        console.log('Driving a truck...');
    }
    loadCargo(amount:number){
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

console.log('---------------');

//discriminated unions

interface Bird{
    type: 'bird';
    flyingSpeed:number;
}
interface Horse{
    type:'horse';
    runningSpeed:number;
}

type Animal = Bird | Horse;

function moveAnimal(animal:Animal){
    switch(animal.type){
        case "bird":
            console.log('Bird moving with speed ' + animal.flyingSpeed);
            break;
        case "horse":
            console.log('Horse moving with speed ' + animal.runningSpeed);
    }
}

moveAnimal({type:"bird", flyingSpeed:10});


console.log('---------------');

//type casting

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.value='Hi there';

//Index properties 
interface ErrorContainer{
    [prop: string]: string;
}

const errorBag: ErrorContainer={
    email: 'Not a valid email',
    username: 'Must start with a capital character'
};

//function overloads

function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:number, b:string):string;
function add(a:string, b:number):string;
function add(a:Combinable, b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

const result = add(1,'5');
console.log(result);

console.log('---------------');


//optional chaining
const fetchedUserData = {
    id:'u1',
    name:'Jamile',
    job:{title:'IT', description:'IT Department'}
};
console.log(fetchedUserData?.job?.title);

//nullish data
const userInput = '';
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);