/*
working with generics

const names: Array<string> = [];
names[0].split('');

const promise: Promise<number> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },2000);
});

promise.then(data=>{
    //data.split(' ');
})


function merge<T extends object, U extends object>(objA:T, objB:U){
    return Object.assign(objA, objB);
}

const mergedObj = merge({name:'Jamile'}, {age: 20});

console.log(mergedObj.name);



interface Lenghty{
    length: number;
}

function countAndDescribe<T extends Lenghty>(element:T):[T,string]{
   let descriptionText='has no value';

    if(element.length > 0){
        descriptionText = 'has ' + element.length + ' element(s).';
    }

    return [element, descriptionText];
}

console.log(countAndDescribe([1,2,3,4,45,5]));

function extractAndConvert<T extends object,U extends keyof T>(obj:T, key:U){
    return 'Value: '+ obj[key];
}

console.log(extractAndConvert({name:'Jamile'},'name'));

*/

//generic classes

class DataStorage<T>{
    private data: T[] = [];

    addItem(item:T){
        this.data.push(item);
    }

    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Test');
textStorage.addItem('Testtwo');
textStorage.removeItem('Test');
console.log(textStorage.getItems());

interface CourseGoal{
    title:string;
    description:string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string, 
    description: string, 
    date: Date
): CourseGoal{
        let courseGoal: Partial<CourseGoal> = {};
        courseGoal.title = title;
        courseGoal.description = description;
        courseGoal.completeUntil = date;

        return courseGoal as CourseGoal;
}

const names:Readonly<string[]> = ['Jamile', 'Sousa'];
//names.push('Test');