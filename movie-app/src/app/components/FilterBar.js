import React from 'react'
import { useMovies } from '../contexts/MoviesContext'
import '../styles/components.scss'

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

export default FilterBar 