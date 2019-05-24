import React from 'react'
import '../App.css'


//movies.poster_src = "https://image.tmdb.org/t/p/w500" + movies.poster_path
const Movies = props => (
      <div className="row">
         { props.movies.map((movies,) => {
            return (
              <div key={movies.id} className="movies-container">
                <p style={{ color: "black", marginRight:"5rem"}}>{ movies.title} </p> 
                <img src={"https://image.tmdb.org/t/p/w300" + movies.poster_path } alt={movies.title} height="200" style={{ marginBottom: "2rem", marginRight:"2rem"}} />
                <p style={{ fontSize: "13px", color: "black"}}>{ movies.overview }</p>
                <p style={{ fontSize: "16px", color: "black", marginLeft: "2rem"}}> Release Date: {movies.release_date}</p>
              </div>
            );          
        })}
    </div>
);

export default Movies;