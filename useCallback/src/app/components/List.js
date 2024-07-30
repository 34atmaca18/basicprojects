'use client'
import React,{useMemo,useCallback,useState} from 'react'
import styles from '../page.scss'

const List = (props) => {
    const items = props.items
    const [filter, setFilter] = useState('')

    const handleChange = useCallback((event) => {
        setFilter(event.target.value)
    },[])

    const filteredItems = useMemo(() => {
        return items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
      }, [filter, items]);

    return (
        <div id='main'>
            <div>
                <input 
                type="text"
                value={filter}
                onChange={handleChange}
                placeholder='filter..' 
                />
            </div>
            <ul
            className={filteredItems.length === 0 ? 'py0' : 'py5'}
            >
                {filteredItems.map((item,index) => (
                    <li
                    key={index}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List