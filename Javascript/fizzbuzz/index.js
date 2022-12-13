//Fizzbuzz

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input){
   if(typeof input != 'number'){
      return 'Not a number';
   }

   if((input%3===0) && (input%5===0)){
      return 'FizBuzz';
   }else if(input%3===0){
      return 'Fizz';
   }else if(input%5===0){
      return 'Buzz';
   } 

}

