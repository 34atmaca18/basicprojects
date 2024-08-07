import React from 'react'
import {LikedMovies,Profile,Navbar} from '../index' 

const ProfileScreen = () => {
  return (
    <div className='w-full h-[100vh] overflow-hidden'>
        <Navbar />
        <Profile />
        <LikedMovies />
    </div>
  )
}

export default ProfileScreen