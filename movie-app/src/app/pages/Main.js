'use client'

import React,{useEffect} from 'react'
import {FilterBar,MovieList} from '../index.js'
import '../styles/main.scss'
import { fetchMovies } from '../api/Api.js'

const Main = () => {
  useEffect(() => {
    fetchMovies()
  }, [])
  
  return (
    <div className='mainContainer'>
      <h1 className='title'>Movie App!</h1>
      <FilterBar />
      <MovieList />
    </div>
  )
}

export default Main