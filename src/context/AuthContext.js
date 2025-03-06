import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContextArea = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    toastSuccess("Register Success");
    navigate("/");
  };
  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    toastSuccess("Login Success");
    navigate("/");
  };

  return (
    <AuthContextArea.Provider value={{ createUser, loginUser }}>
      {children}
    </AuthContextArea.Provider>
  );
};

export default AuthContext;
