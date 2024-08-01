'use client'

import React,{useEffect} from 'react'
import {FilterBar,MovieList} from '../index.js'
import '../styles/main.scss'
import { useMovies } from '../contexts/MoviesContext.js'

const Main = () => {
  const {state,fetchMovies} = useMovies()
  const {filteredMovieList} = state
  
  useEffect(() => {
    fetchMovies()
  }, [])
  
  return (
    <div className='mainContainer'>
      <h1 className='title'>Movie App!</h1>
      <FilterBar />
      <MovieList filteredMovieList={filteredMovieList} />
    </div>
  )
}

export default Main