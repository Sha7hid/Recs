import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

const BASE_URL = "https://api.themoviedb.org/3";

const api_key = "57e19e5c44a33653ce6bfc54743c9e2e";


function Row() {
    const [data , setData] = useState([]);

    const api = axios.create({baseURL: BASE_URL});

    const getPopular = api.get("movie/popular", { 
        params: { api_key } 
      });

      useEffect(() => {
        
      }, []);
  return (
   
     <div>
      
     </div>
    
  )
}

export default Row
