import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./compnent/Navbar";
import Home from "./page/Home";
import AddRecord from "./page/AddRecord";
import EventData from "./page/EventData";
import Login from "./page/Login";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  // ✅ check login on page load
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin") === "true";
    setIsLogin(loginStatus);
  }, []);

  const ProtectedRoute = ({ children }) => {
    const logged = localStorage.getItem("isLogin") === "true";
    return logged ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />

      <Routes>
        {/* Login */}
        <Route path="/" element={<Login setIsLogin={setIsLogin} />} />

        {/* Protected Routes */}
        <Route
          path="/addrecord"
          element={
            <ProtectedRoute>
              <AddRecord />
            </ProtectedRoute>
          }
        />
        <Route
          path="/eventdata"
          element={
            <ProtectedRoute>
              <EventData />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
