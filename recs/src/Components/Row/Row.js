import React, { useEffect, useState } from "react"
import './Row.css'
function Row() {
  const [popular, setPopular, isLargeRow] = useState([]);
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=57e19e5c44a33653ce6bfc54743c9e2e&language=en-US&page=1";
  const image_url = "https://image.tmdb.org/t/p/original/";
      useEffect(() => {
      fetchPopular();
    },[]);
  const fetchPopular = async () => {
      const data = await fetch(url);
      const movies = await data.json();
      console.log(movies);
      setPopular(movies.results);
    };
  return (
      <div className="Main">
     <h1>Popular Movies</h1>
     <div className="Row-item">
     {popular.map(results => {
        return <>
        {/* several row posters*/ }
        
        <img
          key={results.movie?.id}
          className="Row-img"
          src={`${image_url}${isLargeRow ? results.poster_path : results.backdrop_path}`} alt={results.original_title}></img>
        <p>{results.title}</p>
          </>;
      })}
     </div>
     <div className='row_posters'>

{popular?.map(results => {
   
})}
       </div>
      </div>
    );
  };

export default Row








  
   
   
  


