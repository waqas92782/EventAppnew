import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Index.jsx";
const App = () => {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  return (
    <BrowserRouter>
      <Layout isLogin={isLogin} setIsLogin={setIsLogin} />
    </BrowserRouter>
  );
};

export default App;