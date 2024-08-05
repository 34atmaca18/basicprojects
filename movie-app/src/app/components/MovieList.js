import React from 'react'
import styles from '../styles/components.module.scss'

const MovieList = (props) => {
  const filteredMovieList = props.filteredMovieList
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w1280';
    
  return (
    <div className={styles.movieContainer}>
      {filteredMovieList.length === 0 
      ?
      <p className='w-full text-center text-[18px] h-[300px] font-bold flex items-center justify-center'>
        Sorry.. We couldn't find your search. Please try to search for another movie..</p> 
      : 
      <ul className={`${styles.movies} ${filteredMovieList.length === 0 ? styles.py0 : styles.py5}`}>
      {filteredMovieList.map((movie, index) => (
        <li key={index}>
          <h1 className={styles.movieTitle}>{movie.title}</h1>
          <img
            className={styles.movieImage}
            src={`${imageBaseUrl}${movie.backdrop_path}`}
            alt=""
          />
          <div className={styles.movieLogos}>
            <img className={styles.movieHdLogo} src="/hd-logo.svg" alt="" />
            <img className={styles.movieTurkishLogo} src="/turkishflag.svg" alt="" />
            <img className={styles.movieUsLogo} src="/usflag.svg" alt="" />
          </div>
          <div className={styles.movieOverview}>
              <p>{movie.overview}</p>
            </div>
        </li>
      ))}
    </ul>}
    </div>
  )
}

export default MovieList
