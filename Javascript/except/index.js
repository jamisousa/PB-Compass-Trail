const numbers = [1,2,3,4,5];

function exceptElement(array,excluded){
   
   const output = [];

   for(let element of array){
      if(!excluded.includes(element)){
         output.push(element);
      }
   }

   return output;

}


console.log(exceptElement(numbers,4));