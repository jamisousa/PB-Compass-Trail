const numbers=[1,2,3,4,10];

function getMaxElement(array){
      let max = 0;

      for(let element of array){
            if(element > max){
                  max = element;
            }
      }

      return max;
}
console.log(getMaxElement(numbers));
