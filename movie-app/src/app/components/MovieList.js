import React from 'react'

const MovieList = (props) => {
  const filteredMovieList = props.filteredMovieList
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    
  return (
    <div className='movieContainer'>
      <ul className='movies'>
        {filteredMovieList.map((movie,index) => (
          <li key={index}>
            <h1 className='movieTitle'>{movie.title}</h1>
            <img 
            className='movieImages'
            src={`${imageBaseUrl}${movie.backdrop_path}`} 
            alt='' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList