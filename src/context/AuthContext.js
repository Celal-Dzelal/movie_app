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
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContextArea = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userObs();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccess("Register Success");
      navigate("/");
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
    } catch (error) {
      toastError(error);
    }
  };
  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccess("Login Success");
      navigate("/");
    } catch (error) {
      toastError(error);
    }
  };

  const provider = new GoogleAuthProvider();
  const loginGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      toastSuccess("Login Success");
      navigate("/");
    } catch (error) {
      toastError(error);
    }
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
