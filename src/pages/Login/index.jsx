/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Login/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hello')
    const res = await axios.post("http://localhost:4000/auth/login", {
      username,
      password,
    });
    console.log(res.data);
   navigate("/");
  };

  return (
    <>
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <label for="Username">
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="Username"
            id="Username"
            minLength="3"
            required
          />
        </label>

        <label for="Password">
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
            name="password"
            id="Password"
            minLength="8"
            required
          />
        </label>
     
     <input  type="submit" />
      
      </form>
    </>
  );
}

export default Login;
