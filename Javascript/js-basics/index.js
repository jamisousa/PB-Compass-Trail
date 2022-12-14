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
*/

//Functions

walk(); //no errors
function walk(){
    console.log('walk');
}

//Anonymous Function expression

// run(); retuns run is not defined 

let run = function(){
    console.log('run');
};

let move = run;
run();
move();

//Arguments
function sum(){
    let total=0;
    for(let value of arguments){
        total = total + value;
    }
    
    return total;
}

console.log(sum(1,1,1,1));


//Rest operator
function sumtwo(...args){
    return args.reduce((a,b)=>a+b);
}

console.log(sumtwo(1,1,1,1));

//Default parameters
function interest(principal,rate=3.5,years=5){

    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, undefined));

//Getters and Setters, try and catch
const person={
    firstName: 'Jamile',
    lastName:'Sousa',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        if(typeof value !== 'string'){
            throw new Error('Not a valid name');
        }
        const parts = value.split(' ');
        if(parts.length !==2){
            throw new Error('Enter a first name and last name');        
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try{
    person.fullName = 'Jamile';
}
catch(e){
    //alert(e);
}

console.log(person);

/*Local vs Global Scope 

const color = 'red';

function start(){
    const message = 'hi';
    const color = 'blue';
   
}

function stop(){
    const message = 'bye';
}

*/

/* Let vs var

function start(){
    for(var i =0; i<5; i++){
        console.log(i);
    }

    console.log(i);

}

start();
    
*/


console.log("------Working with this------");
/*
This - references the object that is executing the current function
*/
const video = {
    title:'a',
    tags:['a','b','c','d'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        },this);
    }
}

video.showTags();


