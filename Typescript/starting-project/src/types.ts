//return types, void & callbacks


function add(n1: number,n2:number){
    return n1+n2;
}


function printResult(num: number){
    console.log('Result: '+num);
}

function addAndHandle(n1:number,n2:number, cb:(num:number)=>void){
    const result = n1+n2;
    cb(result);
}

printResult(add(4,4));


//functions as types

let combineValues: (n1: number,n2:number) => number;

combineValues = add;

console.log(combineValues(8,8));

addAndHandle(10,20,(result)=>{
    console.log(result);
});

//unknown
let userInput: unknown;
let userName: string;

userInput=5;
userInput='Max';

if(typeof userInput === 'string'){
    userName = userInput;
}

//never
function generateError(message:string, code:number){
    throw{message: message, errorCode: code };
}

const result = generateError('An error occurred', 500);
console.log(result);
