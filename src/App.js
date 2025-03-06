import React from "react";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
import MovieContext from "./context/MovieContext";

const App = () => {
  return (
    <div className="dark:bg-[#23242a] min-h-screen">
      <AuthContext>
        <MovieContext>
          <AppRouter />
          <ToastContainer />
        </MovieContext>
      </AuthContext>
    </div>
  );
};

export default App;
