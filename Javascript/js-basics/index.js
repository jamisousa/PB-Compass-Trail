/*

Starting point
console.log('Hello World');


//working with variables and constants
let message = 'Hi';        //string literal
let number  = "0";        //number literal
let validate = true;     //boolean literal
let ex;                 //undefined
let example = null; 
const interestRate = 0.3; //constant

//working with objects
let person = {
    name: 'None',
    age:0
};

//Dot notation
person.age = '1';

//Bracket notation
let selection ='name';
person[selection] = "Empty";

console.log(person.name);
console.log(person.age);



//arrays
let selectedColors = ['red','blue'];
console.log(selectedColors[0]);


//functions
function greet(name){
    console.log("hi " + name);
}

greet("Jamile");
*/

//operators
let x=10;
let y=3;

//arithmetic operator
console.log(x++);
console.log(x);

//assignment operator
x+=5;
console.log(x);

//comparison operator
console.log(y>3);
console.log(x===16);

console.log("==================");
//strict equality (same type and same value)
console.log(1===1); //true
console.log('1'===1); //false

//lose equality (value)
console.log(1==1); //true
console.log('1'==1); //true
console.log(true==1); //true

console.log("==================");

//ternary operator
let points=50;
let type= points > 100 ? 'gold' : 'silver';

console.log(type);


console.log("==================");
//logical & non-booleans - returns true if both operands are true
console.log(true && true); //true
console.log(true && false); //false

console.log("==================");

let highIncome = true;
let goodCreditScore = false;
let eligible = highIncome && goodCreditScore;
console.log(eligible); //true





