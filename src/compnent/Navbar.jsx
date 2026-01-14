import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";

const Navbar = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
    navigate("/");
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu after click
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><span>VIP</span> Guest</Link>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {!isLogin && (
          <li className="nav-item slide-left">
            <Link to="/" onClick={handleLinkClick}>Dashboard</Link>
          </li>
        )}
        {isLogin && (
          <>
            <li className="nav-item slide-left">
              <Link to="/addrecord" onClick={handleLinkClick}>Add Record</Link>
            </li>
            <li className="nav-item slide-right">
              <Link to="/eventdata" onClick={handleLinkClick}>Records</Link>
            </li>
          </>
        )}
      </ul>

      <div className="nav-btn-wrapper">
        {isLogin ? (
          <button className="nav-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/" className="nav-btn" onClick={handleLinkClick}>Login</Link>
        )}

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? "rotate1" : ""}`}></div>
          <div className={`bar ${menuOpen ? "fade" : ""}`}></div>
          <div className={`bar ${menuOpen ? "rotate2" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
