'use client'

import React,{useEffect,useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import styles from '../styles/profile.module.scss'
import { useRouter } from 'next/navigation'; 

const Profile = () => {
    const { userLoggedIn, userData, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
    };
    
    if (userData === null) {
        return <p className={styles.loading}>Loading...</p>;
    }

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profile}>
                <h1 className={styles.profileTitle}>Profile</h1>
                <div className={styles.userInfo}>
                    <h1>User Info</h1>
                    <div className={styles.infos}>
                        <p>
                            <span className={styles.titles}>Name</span>
                            <span className={styles.userValues}>{userData.name}</span>
                        </p>
                        <p>
                            <span className={styles.titles}>Email</span>
                            <span className={styles.userValues}>{userData.email}</span>
                        </p>
                        <p>
                            <span className={styles.titles}>Country</span>
                            <span className={styles.userValues}>{userData.country}</span>
                        </p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button
                        className={styles.logoutButton} 
                        onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile