'use client'

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { countryList } from '../index.js';
import styles from '../styles/registerpage.module.scss';
import Link from 'next/link';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  country: Yup.string().required('Country is required')
});

const Register = () => {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.formContainer}>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{ name: '', email: '', password: '', country: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={`${styles.name}`}>
                <label htmlFor="name" className={`${errors.name && touched.name ? styles.error : ''}`}>Name</label>
                <Field
                  className={`${styles.input} ${errors.name && touched.name ? styles.errorInput : ''}`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name.."
                />
                <ErrorMessage name="name" component="div" className={styles.error} />
              </div>
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
              <div className={`${styles.country}`}>
                <label htmlFor="country" className={`${errors.country && touched.country ? styles.error : ''}`}>Country</label>
                <Field className={`${styles.input} ${errors.country && touched.country ? styles.errorInput : ''}`} as="select" id="country" name="country">
                  <option value="" disabled>Select your country</option>
                  {countryList.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="country" component="div" className={styles.error} />
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.registerButton}>Register</button>
              </div>
            </Form>
          )}
        </Formik>
        <div className={styles.containerBottom}>
          <Link href="/login" className={styles.bottomLinks}>Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
