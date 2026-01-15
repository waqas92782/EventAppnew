import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = ({ setIsLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const USER_NAME = "awais";
  const USER_PASSWORD = "0000";

  const handleLogin = (e) => {
    e.preventDefault();
    if (name === USER_NAME && password === USER_PASSWORD) {
      localStorage.setItem("isLogin", "true");
      setIsLogin(true);
      navigate("/addrecord");
    } else {
      setError("❌ Wrong name or password");
    }
  };

  return (
    <div className="form-wrapper" style={{ flexDirection: "column", gap: "20px" }}>
      
      {/* ✅ Heading outside the form */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#00ffd5", marginBottom: "10px" }}>
          Please Login, Mister Awais Khan 👋
        </h1>
        <h2 style={{ color: "#00ffd5" }}>
          Welcome Back!
        </h2>
      </div>

      {/* ✅ Form */}
      <form className="event-form" onSubmit={handleLogin} autoComplete="off">
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
