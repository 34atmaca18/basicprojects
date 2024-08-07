'use client'

import React,{useState,createContext,useContext,useEffect} from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
        setUserLoggedIn(storedUserLoggedIn);
    }, []);

    const login = () => {
        setUserLoggedIn(true);
        localStorage.setItem('userLoggedIn', 'true');
    };

    const logout = () => {
        setUserLoggedIn(false);
        localStorage.setItem('userLoggedIn', 'false');
    };

    return (
        <AuthContext.Provider value = {{userLoggedIn,setUserLoggedIn,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext);
}

export {AuthProvider,useAuth}
export default AuthContext