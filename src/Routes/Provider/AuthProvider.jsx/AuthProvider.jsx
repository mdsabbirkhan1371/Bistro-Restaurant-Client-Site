import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../../../Components/firebase/firebase.config';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

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

  // google login

  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // signOut user

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update photo and name

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // for jwt
  const axiosPublic = useAxiosPublic();

  // user exist or not

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('Inside Auth User', currentUser);
      setUser(currentUser);
      if (currentUser) {
        // get token and store in client

        const userInformation = { email: currentUser?.email };
        axiosPublic.post('/jwt', userInformation).then(result => {
          // console.log('axios public user', result.data);
          if (result.data.token) {
            localStorage.setItem('access-token', result.data?.token);
          }
        });
      } else {
        // To Do: remove token (if token is stored in cookies or local storage)
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);
  const information = {
    user,
    loading,
    signIn,
    googleSignIn,
    createUser,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={information}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
