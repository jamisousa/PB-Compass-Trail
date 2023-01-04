import React, {useState, useEffect, useCallback} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
 
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  //GET request
  //  function fetchMoviesHandler(){
  //    fetch('https://swapi.dev/api/films/').then(response => {
  //     return response.json();
  //   }).then(data=>{
  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   });
  //}

//GET request  using async / await
// async function fetchMoviesHandler(){
//     setIsLoading(true);
//     setError(null);

//     try{
//       const response = await fetch('https://swapi.dev/api/films/');
            
//       if(!response.ok){
//         throw new Error('Something went wrong. Please try again later!');
//       }

//       const data = await response.json();
      
//       const transformedMovies = data.results.map((movieData) => {
//          return {
//            id: movieData.episode_id,
//            title: movieData.title,
//            openingText: movieData.opening_crawl,
//            releaseDate: movieData.release_date
//           };
//         });
//        setMovies(transformedMovies);
  
//     } catch(error){
//       setError(error.message);
//     }
//     setIsLoading(false);

//  }

//GET request using callback + async/await
const fetchMoviesHandler = useCallback(async () => {
  setIsLoading(true);
  setError(null);

  try{
    const response = await fetch('https://swapi.dev/api/films/');
          
    if(!response.ok){
      throw new Error('Something went wrong. Please try again later!');
    }

    const data = await response.json();
    
    const transformedMovies = data.results.map((movieData) => {
       return {
         id: movieData.episode_id,
         title: movieData.title,
         openingText: movieData.opening_crawl,
         releaseDate: movieData.release_date
        };
      });
     setMovies(transformedMovies);

  } catch(error){
    setError(error.message);
  }
  setIsLoading(false);

},[]);


useEffect(()=>{
  fetchMoviesHandler();
},[fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies found.</p>}
        { isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
