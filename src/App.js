import React from "react";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";

const App = () => {
  return (
    <div className="dark:bg-[#23242a] min-h-screen">
      <AuthContext>
        <AppRouter />
        <ToastContainer />
      </AuthContext>
    </div>
  );
};

export default App;
