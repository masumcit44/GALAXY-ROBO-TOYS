import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext() 
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]= useState(true)
    const googleProvider = new GoogleAuthProvider()
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    

    useEffect(()=>{
        onAuthStateChanged(auth,(loggedUser)=>{
            console.log(loggedUser);
            setLoading(false)
            setUser(loggedUser)
        })
    },[])
    
    const authInfo = {
        user,
        loading , signIn , logOut , googleLogin , signUp
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;