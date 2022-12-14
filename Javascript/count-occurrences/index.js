const numbers=[1,2,3,4,1];

const count = countOccurrences(numbers,-1);

console.log(count);

function countOccurrences(array,searchElement){
      let count = 0;
      for(let element of array){
            if (element===searchElement){
                  count++;
            }
            return count;
      };
}