/*
let  numbers = [3,4];
let another = numbers;


//end
numbers.push(5,6);

//beggining
numbers.unshift(1,2);

//middle
numbers.splice(2,0,'a','b');

console.log(numbers)

//finding elements
console.log(numbers.indexOf(2));

const courses=[
   {id:1, name:'a'},
   {id:2, name:'b'}
]

//using arrow functions
const course = courses.find(course => course.name === 'a');

console.log(course);

//removing elements
const nums = [1,2,3,4];

//end
const last = nums.pop();

//beginning
const first = nums.shift();

//middle
nums.splice(2,1);


console.log(first);
console.log(nums);

//emptying arrays
//numbers = [];
numbers.length=0;

//console.log(numbers);
//console.log(another);
*/

/*combining and slicing
const frst=[1,1,1];
const scnd=[2,2,2];

const combined = frst.concat(scnd);

const slice = combined.slice(2,4);

console.log(combined);
console.log(slice);


//spread operator
const frst=[1,1,1];
const scnd=[2,2,2];

const combined = [...frst,'a',...scnd,'b'];
const copy = [...combined];


console.log(combined);
console.log(copy);

//iterating

for (let number of numbers){
   console.log(number);
}

numbers.forEach((number) =>{console.log(number)});
*/

//joininig arrays
const numbers=[1,2,3];

numbers.join(',');

const message = 'This is my first message';
const parts =message.split('');
console.log(parts);

const combined = parts.join('-');
console.log(combined);

//sorting arrays
const nums = [2,3,1];
nums.sort();
nums.reverse();

console.log(nums); 

const courses=[
   {id:1, name:'Node'},
   {id:2, name:'Javascript'}
]

courses.sort(function(a,b){
   if(a.name < b.name) return -1;
   if(a.name > b.name) return 1;
   
   return 0;
});

console.log(courses);


//testing elements
const allPositive = nums.every(function(value){
   return value >=0;
});

const atLeastOnePositive = nums.some(function(value){
   return value >=0;
});

console.log(allPositive);
console.log(atLeastOnePositive);

//filtering arrays
// const filtered = nums.filter(value=>value >= 0);

// console.log(filtered);


//mapping arrays
const nbs=[1,-1,2,3];
const items = numbers.filter(n => n >=0).map(n => {value:n} );

// const items = filtered.map(n => { obj = {value:n};} );

console.log("-----------");
//console.log(items);

//reducing arrays
const sum = nbs.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);
