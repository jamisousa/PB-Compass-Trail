
const movie={
   title:'a',
   releaseYear:2020,
   rating:4.5,
   director:'b'
}


function showProperties(obj){
   for(let index in movie){
      if(typeof movie[index] === 'string'){
         console.log(index, movie[index]);
      }
   }
}

showProperties(movie);
