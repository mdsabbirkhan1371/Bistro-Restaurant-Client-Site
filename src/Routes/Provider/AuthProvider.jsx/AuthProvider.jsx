import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../../../Components/firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn user

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut user

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // user exist or not

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('Inside Auth User', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const information = {
    user,
    loading,
    signIn,
    createUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={information}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
