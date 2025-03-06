import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContextArea = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userObs();
  }, []);

  const createUser = async (email, password, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password);
    toastSuccess("Register Success");
    navigate("/");
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
  };
  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    toastSuccess("Login Success");
    navigate("/");
  };

  const provider = new GoogleAuthProvider();
  const loginGoogle = async () => {
    await signInWithPopup(auth, provider);
    toastSuccess("Login Success");
    navigate("/");
  };

  const logOut = async () => {
    await signOut(auth);
    toastSuccess("Logout Success");
  };

  const userObs = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        });
      } else {
        setCurrentUser(false);
      }
    });
  };

  return (
    <AuthContextArea.Provider
      value={{ createUser, loginUser, loginGoogle, logOut, currentUser }}
    >
      {children}
    </AuthContextArea.Provider>
  );
};

export default AuthContext;
