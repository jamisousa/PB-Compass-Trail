//show if numbers are even or odd respecting the defined limit

showNumbers(10);

function showNumbers(limit){
   for(let i=0; i<=limit;i++){
      let res = (i%2===0)?'even':'odd';
      console.log(i,res);
   }
}