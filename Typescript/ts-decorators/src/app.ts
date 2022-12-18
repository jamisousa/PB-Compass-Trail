//working with decorators

// function Logger(logString: string){
//     return function(constructor: Function){
//         console.log(logString);
//         console.log(constructor);
//     }
// }

// function WithTemplate(template:string, hookID:string){
//     return function(_: Function){
//         const  hookEl = document.getElementById(hookID);
//         if(hookEl){
//             hookEl.innerHTML = template;
//         }
//     }
// }

// function WithTemplate(template:string, hookID:string){
//     return function(constructor:any){
//         const hookEl = document.getElementById(hookID);
//         const p = new constructor();
//         if(hookEl){
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h1')!.textContent = p.name;
//         }
//     }
    
// }


// function WithTemplate(template:string, hookID:string){
//     return function<T extends {new(...args: any[]):{name:string}}>(originalconstructor:T){
//         return class extends originalconstructor{
//             constructor(){
//                 super();
//                 const hookEl = document.getElementById(hookID);
//                 const p = new originalconstructor();
//                 if(hookEl){
//                     hookEl.innerHTML = template;
//                     hookEl.querySelector('h1')!.textContent = this.name;
//                 }
//             }
//         };
//     };
    
// }

// @Logger('LOGGING-PERSON')
// @WithTemplate('<h1>Testing decorator</h1>','app')
// class Person{
//     name = document.getElementById('p')!;
//     constructor(){
//         console.log('Creating person object...');
//     }
// }

// const pers = new Person();
// console.log(pers);



// function Log(target: any, propertyName:string | Symbol){
//     console.log('Property decorator!');
//     console.log(target, propertyName);
// }

// function Log2(target:any, name: string, descriptor: PropertyDescriptor){
//     console.log('Accessor decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }

// function Log3(target:any, name: string | Symbol, descriptor:PropertyDescriptor){
//     console.log('Method decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }

// function Log4(target:any, name:string | Symbol, position:number){
//     console.log('Parameter decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(position);
// }

// class Product{
//     @Log
//     title:string;
//     private _price: number;

//     @Log2
//     set price(val:number){
//         if(val>0){
//             this._price = val;
//         }else{
//             throw new Error('Invalid price - input positive value');
//         }
//     }

//     constructor(t:string, p:number){
//         this.title = t;
//         this._price = p;
//     }

//     @Log3
//     getPriceWithTax(@Log4 tax:number){
//         return this._price * (1+tax);
//     }

// }

// const p1 = new Product ('Book', 29);
// const p2 = new Product ('Book', 19);


// function Autobind(target:any, methodName:string, descriptor: PropertyDescriptor){
//     const originalMethod = descriptor.value;
//     const adjDescriptor: PropertyDescriptor = {
//         configurable: true,
//         enumerable: false,
//         get(){
//             const boundFn = originalMethod.bind(this);
//         }
//     }
// }

// class Printer{
//     message = 'This works!';

//     showMessage(){
//         console.log(this.message);
//     }
// }

// const p = new Printer();

// const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage.bind(p));

interface ValidatorConfig{
    [property:string]:{
        [validatableProp:string]:string[]
    }
}

const registeredValidators: ValidatorConfig = {};


function Required(target:any, propName:string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };

}

function PositiveNumber(target:any, propName:string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    };

}

function validate(obj: any){
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig){
        return true;
    }

    let isValid = true;

    for(const prop in objValidatorConfig){
        for(const validator of objValidatorConfig[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
            }
        }
    }

    return isValid;
}

class Course{
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t:string, p:number){
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit',event=>{
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)){
        alert('Invalid input, please try again');
        return;
    }
    console.log(createdCourse);
})