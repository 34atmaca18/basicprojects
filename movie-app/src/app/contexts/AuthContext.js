'use client'

import React, { useState, createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedUserLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
        setUserLoggedIn(storedUserLoggedIn);
        console.log(storedUserLoggedIn)

        if (storedUserLoggedIn) {
            const user = JSON.parse(localStorage.getItem('currentUser')) || null;
            setUserData(user)
        }
        else {
            setUserData(null)
        }
    }, []);

    useEffect(() => {
        console.log("userData inside useEffect:", userData);
        console.log("inside useeffect",userLoggedIn)
    }, [userData]);

    const login = (user) => {
        setUserLoggedIn(true);
        setUserData(user);
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        router.push('/')
    };

    const logout = () => {
        setUserLoggedIn(false);
        setUserData(null);
        localStorage.setItem('userLoggedIn', 'false');
        localStorage.removeItem('currentUser');
        router.push('/')
    };

    return (
        <AuthContext.Provider value={{ userLoggedIn, userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };
export default AuthContext;
