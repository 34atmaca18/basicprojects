'use client'

import React,{useState} from 'react'
import styles from '../styles/loginpage.module.scss'
import Link from 'next/link'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')    
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.formContainer}>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
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
                            placeholder='Enter your password..'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type='submit'
                        className={styles.loginButton}>Login</button>
                    </div>
                </form>
                <div className={styles.containerBottom}>
                    <Link className={styles.bottomLinks} href="/forgotpassword">Forgot Password?</Link>
                    <Link className={styles.bottomLinks} href="/register">Register</Link>
                </div>
            </div>    
        </div>
    )
    }

export default Login