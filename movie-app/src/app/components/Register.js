'use client'

import React,{useState} from 'react'
import { countryList } from '../index.js'
import styles from '../styles/registerpage.module.scss'
import Link from 'next/link'


const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [country,setCountry] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.registerContainer}>
      <div className={styles.formContainer}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.name}>
            <label htmlFor="name">Name</label>
            <input 
            type="text"
            id='name'
            value={name}
            placeholder='Enter your name..'
            onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input 
            type="email"
            id='email'
            value={email}
            placeholder='Enter your email..'
            onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.password}>
            <label htmlFor="password">Password</label>
            <input 
            type="password"
            id='password'
            value={password}
            placeholder='Enter your password..'
            onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className={styles.country}>
            <label htmlFor="country">Country</label>
            <select
            id="country"      
            value={country}                          
            onChange={(e) => setCountry(e.target.value)}>
              <option value="" disabled>Select your country</option>
                  {countryList.map((country, index) => (
              <option className={styles.countryOptions} key={index} value={country}>{country}</option>
     ))}
            </select>
          </div>
          <div className={styles.buttonContainer}>
            <button type='submit'
            className={styles.registerButton}>Register</button>
          </div>
        </form>
        <div className={styles.containerBottom}>
          <Link href="/login" className={styles.bottomLinks}>Already have an account?</Link>
        </div>
      </div>
    </div>
  )
}

export default Register