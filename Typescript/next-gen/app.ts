/*
let & const

const userName='Jamile';
let age=30;


//arrow functions
const add = (a:number, b:number) =>  a+b;

console.log(add(2,5));

const printOutput:(a: number | string) => void =  output => console.log(output);

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event));
}
*/

//spread operator, array-object destructing

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    name:'Jamile',
    age:20
}

const copiedPerson = {...person};

const [hobby1,hobby2, ...remaining] = hobbies;
console.log(hobby1);


//rest parameters

const add = (...numbers:number[]) => {
    return numbers.reduce((curResult, curValue)=>{
        return curResult + curValue;
    },0)

}

const addedNumbers = add(5,10,2,3,4,5);
console.log(addedNumbers);