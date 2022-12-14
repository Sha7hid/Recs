import React, { useEffect, useState } from "react"
import './Row.css'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/pagination';

function Row() {
  const [popular, setPopular, isLargeRow] = useState([]);
  const [recUrl, setRecurl] = useState([]);
  let rec_url;
  let movie_id;

    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=57e19e5c44a33653ce6bfc54743c9e2e&language=en-US&page=1";
  const image_url = "https://image.tmdb.org/t/p/original/";
  
      useEffect(() => {
      fetchPopular();

    },[]);
    const handleClick = async (results)  => {
  
       movie_id = (results.id);
       rec_url =`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=57e19e5c44a33653ce6bfc54743c9e2e&language=en-US&page=1`;
       const data = await fetch(rec_url);
       const movies = await data.json();
       setRecurl(movies.results);
  {recUrl.map(movie => {
       return(
    <>
    <p>{movie.title}</p>
    </>
  )
       })}
   
    };
 
   
    
   
  const fetchPopular = async () => {
      const data = await fetch(url);
      const movies = await data.json();
     
      setPopular(movies.results);
    };

    
  return (

    <Swiper
    modules={[ Pagination, Scrollbar, A11y]}

    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    slidesPerView={1}
   
    
  >
      <div className="Main">
     
     <SwiperSlide> <div className="Row-item">
     {popular.map(results => {
        return <>
       
        {/* several row posters*/ }
        <div className="Image-wrap">
        <img
          key={results.movie?.id}
          onClick={() => handleClick(results)
          }
          className="Row-img"
          src={`${image_url}${isLargeRow ? results.poster_path : results.backdrop_path}`} alt={results.original_title}></img>
      <p className="title">{results.title}</p>
   
    {handleClick()}
      </div> 
    
      
          </>;
           
      })}
      
     </div></SwiperSlide>
    
   
      </div>
      </Swiper>
    );
  };

export default Row








  
   
   
  


