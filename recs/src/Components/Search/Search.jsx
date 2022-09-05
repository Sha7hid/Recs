import React, { useState, useEffect } from "react"

function Search() {
    const [mov, setMovie, results] = useState([])

    const fetchData = e => {
      const query = e.target.value
      fetch(`
      https://api.themoviedb.org/3/search/movie?api_key=57e19e5c44a33653ce6bfc54743c9e2e&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setMovie(data.results)
          console.log(data.results)
        })
    }
  
    return (
      <div>
        <input onChange={fetchData} label="Search User" />
        {setMovie.length > 0 && (
            <ul>
        {mov.map(results => {
            
    <li>{results.original_title}</li>
})}
</ul>
         )}
    </div>
    )
}

export default Search
