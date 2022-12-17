/* Working with interfaces */


// type AddFn =(a:number, b:number)=>number;

// let add:AddFn;



interface AddFn{
    (a:number, b:number): number;
}

let  add: AddFn;

add = (n1:number,n2:number)=>{
    return n1+n2;
}



interface Named{
    readonly name:string;
    outputName?: string;
}

interface Greetable extends Named{
    greet(phrase: string):void;
}

class Person implements Greetable{
    name: string;
    age=20;

    constructor(n:string){
        this.name = n;
    }

    greet(phrase: string): void {
        console.log(phrase + '' + this.name);
    }
    
}



let user1:Person;

user1 = new Person('Jams');

user1.greet('Hi there ');
