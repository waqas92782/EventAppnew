import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../compnent/Navbar";
import AddRecord from "../page/AddRecord";
import EventData from "../page/EventData";
import Login from "../page/Login";

const Layout = ({ isLogin, setIsLogin }) => {
  const location = useLocation();

  // Protected Route
  const ProtectedRoute = ({ children }) => {
    const logged = localStorage.getItem("isLogin") === "true";
    return logged ? children : <Navigate to="/" />;
  };

  // Navbar hide on login page
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {/* Navbar show only if not on login page and user logged in */}
      {!hideNavbar && isLogin && (
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      )}

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
    </>
  );
};

export default Layout;
