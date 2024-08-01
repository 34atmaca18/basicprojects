import React,{useState} from 'react'
import { useProducts } from '../contexts/ProductsContext'
import '../styles/components.scss'

const Filterbar = () => {
    const {state, setFilter} = useProducts()
    const {filter} = state

    const handleChange = (e) => {
        setFilter(e.target.value);
    }
    
    return (
        <div id='filterbar'>
            <input 
            type="text"
            value={filter}
            onChange={handleChange}
            placeholder='filter products..'
            />
        </div>
    )
    }

export default Filterbar
