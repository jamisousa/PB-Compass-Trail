//Speed limit = 70
//For every 5km above limit get 1 point
//If more than 12 points -> suspended

function checkSpeed(speed){

   const limit = 70;
   const kmPerPoint=5;

   if(speed <= limit){
      console.log('Ok');
   }else{
      let points = Math.floor((speed - limit) / kmPerPoint);

      if(points>=12){
         console.log("Suspended");
      }else{
         console.log("Points", points);
      }
   }

}

checkSpeed(70);