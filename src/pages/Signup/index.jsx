import { useState } from "react";
import "../Signup/Signup.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirhtdate] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
   
    const res = await axios.post("http://localhost:4000/auth/signup", {
      username,
      password,
      email,
      birthdate,
    });
    console.log(res.data);
    if(res.status == 200){
      navigate("/login");
     }else {
  retun
     } };
  
 return (
    <div className="signup">
      <h1>Please Sign up</h1>
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

        <label for="Email">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="Email"
          />
        </label>

        <label for="Birthdate">
          Birthday
          <input
            value={birthdate}
            onChange={(e) => setBirhtdate(e.target.value)}
            type="date"
            name="Birthday"
          />
          <button type="submit">signup</button> 
    
        </label>
      </form>
    </div>
  );
}

export default Signup;
