const numbers = [1,2,3,4,5];


function move(array,index,offset){

   const position = index + offset;

   if(position >= array.length);{
         console.error('Invalid offset!');
         return;
   }

   const output = [...array];
   const element = output.splice(index,1)[0];
   output.splice(index + offset,0,element);

   return output;
}

console.log(numbers);
const output = move(numbers,0,1);
console.log(output);
