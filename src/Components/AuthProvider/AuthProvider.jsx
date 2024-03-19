import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";


export const AuthContext=createContext(null)
const googleProvider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut=()=>{
                                                
        return signOut(auth)

    }
    const googleLogin=()=>{
        setLoading(true)
        signInWithPopup(auth, googleProvider)

    }
    const githubLogin=()=>{
        setLoading(true)
        signInWithPopup(auth, githubProvider)

    }
    useEffect(()=>{
        
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }
            else{
                setLoading(false)
            }
            
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo={user,setUser,createUser,signInUser,logOut,googleLogin,loading,githubLogin}
    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;