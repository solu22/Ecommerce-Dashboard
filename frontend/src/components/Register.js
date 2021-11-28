import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const signUp = async () => {
    let userInfo = { name, password, email };
    const result = await axios.post(
      "http://localhost:8000/api/register",
      userInfo
    );
    const info = await result.data;
    localStorage.setItem("user-info", JSON.stringify(info));
    navigate("/add");
  };
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register Page</h1>
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        type="text"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={signUp} className="btn btn-primary">
        Register
      </button>
    </div>
  );
};

export default Register;
