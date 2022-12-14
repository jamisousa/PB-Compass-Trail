const numbers = [1,2,3,4,5];

function doesItInclude(array, search){
   for(let element of array){
      if (element === search){
         return true;
      }
   };

   return false;
}

console.log(doesItInclude(numbers,10));