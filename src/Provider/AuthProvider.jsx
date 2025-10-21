import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { CgPassword } from 'react-icons/cg';



const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(loading, user)
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
    } 

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser)
        setLoading(false)
       }) 
       return () => {
        unSubscribe();
       }
    },[])

    const authData = { 
        user, 
        setUser,
        creatUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
    }
    
    
    
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;