'use client'

import React from 'react'
import { useAuth } from '../contexts/AuthContext.js'
import {Login,Navbar} from '../index.js'
import { useRouter } from 'next/navigation.js'

const LoginScreen = () => {
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
        <Login />
    </div>
  )
}

export default LoginScreen