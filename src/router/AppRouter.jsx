import React from "react";
import Navbar from "../components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Main from "../pages/Main";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;
