import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./compnent/Navbar";
import Home from "./page/Home";
import AddRecord from "./page/AddRecord";
import EventData from "./page/EventData";
import Login from "./page/Login";

const App = () => {

  // Login state directly from localStorage
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    const logged = localStorage.getItem("isLogin") === "true";
    return logged ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>

      {/* Navbar sirf tabhi show hoga jab user login ho */}
      {isLogin && <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />}

      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Login setIsLogin={setIsLogin} />} />

        {/* Protected Pages */}
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

      </Routes>
    </BrowserRouter>
  );
};

export default App;
