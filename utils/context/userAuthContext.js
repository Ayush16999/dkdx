import React, { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "./firebase";

const userAuthContext = createContext();

function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [duplicate, setDuplicate] = useState([]);
  const [favourite, setFavourite] = useState([]);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
    
  }

  function passwordReset(email) {
    return sendPasswordResetEmail(auth, email);
  }

  async function getData() {
    try {
      let mydata = await fetch("https://itproducts.onrender.com/products");
      let newdata = await mydata.json();
      setData(newdata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    getData();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        data,
        setData,
        favourite,
        setFavourite,
        search,
        setSearch,
        duplicate,
        setDuplicate,
        user,
        setUser,
        signUp,
        login,
        logOut,
        googleSignIn,
        passwordReset,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

// export function useUserAuth() {
//     return useContext(<userAuthContext.Provider />);
//   }

export { userAuthContext, UserAuthContextProvider };
