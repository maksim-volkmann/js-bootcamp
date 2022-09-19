import axios from "axios";
import { useState } from "react";
import "./login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  console.log("🚀 ~ loginData", loginData);

  const handleLoginInput = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/login",
        loginData
      );
      document.cookie = `session_token=${data}`;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <label>Email</label>
        <input onChange={handleLoginInput} name="email" type="email" />
        <label>Password</label>
        <input onChange={handleLoginInput} name="password" type="password" />
        <button onClick={handleSubmit}>LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
