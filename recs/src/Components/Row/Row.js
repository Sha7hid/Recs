import React, { useEffect, useState } from "react"
import './Row.css'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/pagination';
function Row() {
  const [popular, setPopular, isLargeRow, setRec, rec ] = useState([]);
  
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=57e19e5c44a33653ce6bfc54743c9e2e&language=en-US&page=1";
  const image_url = "https://image.tmdb.org/t/p/original/";
  
      useEffect(() => {
      fetchPopular();
    },[]);
    const handleClick = (results)  => {
  
      const movie_id = (results.id);
      const rec_url =`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=57e19e5c44a33653ce6bfc54743c9e2e&language=en-US&page=1`;
      
      console.log(results.id);
      console.log(rec_url);
   
    }
    const movie_id = 616037;
    const rec_url =`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=57e19e5c44a33653ce6bfc54743c9e2e&language=en-US&page=1`;
    
   
  const fetchPopular = async () => {
      const data = await fetch(url);
      const movies = await data.json();
      console.log(movies);
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
     <h1>Popular Movies</h1>
     <SwiperSlide> <div className="Row-item">
     {popular.map(results => {
        return <>
        {/* several row posters*/ }
        <div className="Image-wrap">
        <img
          key={results.movie?.id}
          onClick={() => handleClick(results)}
          className="Row-img"
          src={`${image_url}${isLargeRow ? results.poster_path : results.backdrop_path}`} alt={results.original_title}></img>
      <p className="title">{results.title}</p></div> 
          </>;
      })}
     </div></SwiperSlide>
    
   
      </div>
      </Swiper>
    );
  };

export default Row








  
   
   
  


