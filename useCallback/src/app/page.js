import React,{useCallback,useMemo} from 'react'
import './page.scss'
import List from './components/List'

const Home = () => {
  const items = ['milk','cart','curt','tata','papa','sata','cccc']
  return (
    <div
    id='home'>
      <h1>Filter Items!</h1>
      <List items={items}/>
    </div>
  )
}

export default Home