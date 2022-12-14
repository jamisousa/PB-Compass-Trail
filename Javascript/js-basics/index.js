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

*/

//Control flow

//ifelse
let hour=10;

if(hour >=6 && hour<12){
    console.log('Good morning');

}else if(hour >= 12 && hour<18){
    console.log('Good afternoon');

}else{
    console.log('Good evening');

}


//switch
let role = 'guest';

switch(role){
    case 'guest':
        console.log("Guest user");
        break;

    case 'moderator':
        console.log("Moderator user");
        break;

    default:
        console.log('Unknown User');
}


//loops
for(let i=0; i<10; i++){
    console.log('Hi');
}

let a=0;
while(a<=5){
    console.log('Hello');
    a++;
}


const person={
    name:'None',
    age:20
}

for(let key in person){
    console.log(key,person[key]);
}

const colors=['red', 'green','blue'];

for (let index in colors){
    console.log(index,colors[index]);
}

let i=0;

while(i<10){
    if(i%2==0){
        i++;
        continue;
    }

    console.log(i);
    i++;
}

