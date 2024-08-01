import React from 'react'
import '../styles/components.scss'

const FilterBar = () => {
  return (
    <div
    className='filterContainer'>
      <input 
      type="text" 
      placeholder='filter movies..'/>
    </div>
  )
}

export default FilterBar

/* 
import React from 'react'
import { useMovies } from '../contexts/MoviesContext'

const FilterBar = () => {
  const{filter,setFilter} = useMovies()

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div
    className='filterContainer'>
      <input 
      type="text" 
      value={filter}
      placeholder='filter movies..'
      onChange={handleChange}/>
    </div>
  )
}

export default FilterBar */