import React from 'react';
import Navbar from '@/app/components/Navbar';
import styles from '../../styles/moviepage.module.scss'

const MovieDetail = async ({ params }) => {
  const { id } = params;
  const my_api_key = process.env.NEXT_PUBLIC_MY_KEY;
  const base_url = "https://api.themoviedb.org/3";

  try {
    const response = await fetch(`${base_url}/movie/${id}?api_key=${my_api_key}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movie = await response.json();

    return (
      <div>
        <Navbar/>
        <div className={styles.movieContainer}>
            <div className={styles.blackEffect}></div>
            <div className={styles.leftPart}>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <ul className={styles.genres}>
                    {movie.genres.map((genre,index) => (
                        <li key={index}>
                            {genre.name}
                        </li>
                    ))}
                </ul>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        </div>
      </div>
    );
  } catch (error) {
      console.error("Failed to fetch movie:", error);
      return <div>Movie not found</div>;
  }
};

export default MovieDetail;
