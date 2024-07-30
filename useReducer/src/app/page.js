'use client'
import React,{useReducer} from 'react'

const Home = () => {
  const initialState = {count: 0}
  const reducer = (state,action) => {
    switch(action.type) {
      case 'INCREASE':
        return {count: state.count + 1}
      case 'DECREASE':
        return {count: state.count - 1}
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div
    className='flex flex-col justify-center items-center gap-5
    w-full h-[100vh] text-white bg-gray-400'>
      <h1 className='text-[35px] font-bold'>useReducer!</h1>
      <div className='flex flex-row gap-3 justify-center items-center'>
        <button className='w-[20px] h-[20px] border-[1px] border-black text-white bg-gray-700 text-[14px] 
        flex items-center justify-center hover:scale-125'
        onClick={() => dispatch({type: 'DECREASE'})}
        >-</button>
        <p className='font-bold text-[15px]'>Sayaç: {state.count}</p>
        <button className='w-[20px] h-[20px] border-[1px] border-black text-white bg-gray-700 text-[14px]
        flex items-center justify-center hover:scale-125
        '
        onClick={() => dispatch({type: 'INCREASE'})}
        >+</button>
      </div>
    </div>
  )
}

export default Home