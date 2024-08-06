'use client'

import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from '../styles/loginpage.module.scss'
import Link from 'next/link'

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
});

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.formContainer}>
                <h1>Sign in</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        resetForm();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className={styles.form}>
                            <div className={`${styles.email}`}>
                                <label htmlFor="email" className={`${errors.email && touched.email ? styles.error : ''}`}>Email</label>
                                <Field
                                    className={`${styles.input} ${errors.email && touched.email ? styles.errorInput : ''}`}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email.."
                                />
                                <ErrorMessage name="email" component="div" className={styles.error} />
                            </div>
                            <div className={`${styles.password}`}>
                                <label htmlFor="password" className={`${errors.password && touched.password ? styles.error : ''}`}>Password</label>
                                <Field
                                    className={`${styles.input} ${errors.password && touched.password ? styles.errorInput : ''}`}
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password.."
                                />
                                <ErrorMessage name="password" component="div" className={styles.error} />
                            </div>
                            <div className={styles.buttonContainer}>
                                <button type="submit" className={styles.loginButton}>Login</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className={styles.containerBottom}>
                    <Link className={styles.bottomLinks} href="/forgotpassword">Forgot Password?</Link>
                    <Link className={styles.bottomLinks} href="/register">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
