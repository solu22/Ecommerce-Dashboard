import axios from "axios";
import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const signIn = async () => {
    const loginData = { email, password };
    const result = await axios.post(
      "http://localhost:8000/api/login",
      loginData
    );
    const info = await result.data;
    localStorage.setItem("user-info", JSON.stringify(info));
    navigate("/add");
  };
  return (
    <div>
      <Header />
      <h1 style= {{textAlign:'center'}}>LoginPage</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder = "enter an email"
        />
        <br />
        <input
          type="text"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder = "enter an password"
        />
        <br />

        <button onClick={signIn} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
