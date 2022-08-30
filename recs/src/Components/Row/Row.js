import React, { useEffect, useState } from "react"
import './Row.css'
function Row() {
  const [popular, setPopular] = useState([]);
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=57e19e5c44a33653ce6bfc54743c9e2e&language=en-US&page=1";
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
     <h1>Movies</h1>
     <div className="Row-item">
     {popular.map(results => {
        return <p>{results.title}</p>;
      })}
     </div>
      
      </div>
    );
  };

export default Row








  
   
   
  


