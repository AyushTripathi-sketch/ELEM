import React from "react"; 
import { createContext, useContext, useEffect, useState } from "react";
import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";
import writeUserData from "../backend/createUser";
import {auth} from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user, setUser] = useState('loading');
    const signUp = async (email,password,name)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            console.log(result.user);
            updateProfile(result.user, {
                displayName: name
            })
            if(result.user){
                return writeUserData(result.user.uid,name,result.user.email);
            }
        })
        .catch(e => {
            console.log(e);
        });
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logOut(){
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          console.log("Auth", currentuser);
          setUser(currentuser);
        });
        return () => {
          unsubscribe();
        };
      }, []);
    return (
         <userAuthContext.Provider value={{ user,signUp, logIn, logOut }}>{children}</userAuthContext.Provider>
    );
}

export function useUserAuth(){
    return useContext(userAuthContext);
}