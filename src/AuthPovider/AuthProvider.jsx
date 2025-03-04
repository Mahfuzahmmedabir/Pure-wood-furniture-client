import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignOut = () => {
    return signOut(auth)
  }
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, currentUser => {
       setLoading(false);
       setUser(currentUser);
       console.log(currentUser)
       return () => {
         unsubscribe();
       };
     });
   }, []);
  
  

  const authInfo = {
    createNewUser,
    user,
    SignOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
