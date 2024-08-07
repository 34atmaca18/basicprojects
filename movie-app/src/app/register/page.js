'use client'

import React from 'react'
import {Register,Navbar} from '../index.js'
import { useAuth } from '../contexts/AuthContext.js'
import { useRouter } from 'next/navigation.js'

const RegisterScreen = () => {
  const router = useRouter()
  const {userLoggedIn} = useAuth()
  if (userLoggedIn) {
    router.push("/profile")
    return(
      <p className='w-full h-[100vh] flex justify-center 
      items-center bg-black text-white font-bold'>
        Redirecting..</p>
    )
  }
  
  return (
    <div>
      <Navbar />
      <Register />
    </div>
  )
}

export default RegisterScreen