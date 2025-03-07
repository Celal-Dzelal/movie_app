import React, { useContext } from "react";
import { AuthContextArea } from "../context/AuthContext";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContextArea);
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
