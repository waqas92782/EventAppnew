import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = ({ setIsLogin }) => {   // ✅ receive setIsLogin as prop
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Single user
  const USER_NAME = "ali";
  const USER_PASSWORD = "0000";

  const handleLogin = (e) => {
    e.preventDefault();
    if (name === USER_NAME && password === USER_PASSWORD) {
      localStorage.setItem("isLogin", "true"); // store session
      setIsLogin(true);                         // ✅ update state immediately
      navigate("/addrecord");                   // go to AddRecord
    } else {
      setError("❌ Wrong name or password");
    }
  };

  return (
    <div className="form-wrapper">
      <form className="event-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {error && (
          <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
