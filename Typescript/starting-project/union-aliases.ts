/*Working with types
number -> no differentiation between integers or floats
string -> '' , "", ``
boolean -> true,false, no truthy or falsy values 


console.log("Hi!");


function add(n1:number,n2:number, showResult:boolean, phrase:string){
    // if(typeof n1 === 'number' && typeof n2==='number'){
    //     throw new Error('Incorrect input!');
    // }
    const result = n1+n2;
    if(showResult){
        console.log(phrase+result);
    }else{
        return result;
    }
}


let number1:number;
number1=5;

number1=5;

const number2=2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const res = add(number1,number2,printResult, resultPhrase);
console.log(res);


enum Role{
    admin, readOnly,author
};

const person={
    name:'Jamile',
    nickname:'None',
    hobbies:['HB1', 'HB2'],
    age:20,
    role: Role.admin 
};

let favoriteActivities: string[];
favoriteActivities = ['hb1', 'hb2'];

person.role=Role.author;
console.log(person.name, ` 's role: `, person.role[1]);

if(person.role === Role.author){
    console.log('Is author');
}

for(let key in person.hobbies){
    console.log(person.hobbies[key]);
}
*/


//aliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

//Union type, literal types

function combine(n1:Combinable,n2:Combinable, resultConversion: ConversionDescriptor){

    let result;

    if(typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number'){
        result = +n1+ +n2;
    }else{
        result = n1.toString()+n2.toString();
    }

    return result;

    // if(resultConversion === 'as-number'){
    //     return +result;
    
    // }else{
    //     return result.toString();
    // }
    
}

const combinedData = combine(20,26,'as-number');

const combinedData2 = combine(20,'10','as-text');

const combinedData3 = combine('20','2','as-number');

console.log(combinedData);
console.log(combinedData2);
console.log(combinedData3);