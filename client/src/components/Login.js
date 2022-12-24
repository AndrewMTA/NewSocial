import React, { useState,  useContext } from "react";
import { useLoginUserMutation } from "../services/appApi";
import { Link, useNavigate } from "react-router-dom";
import Design from "./assets/Design.jpg"
import { AppContext } from "../context/appContext";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { socket } = useContext(AppContext);
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  function handleLogin(e) {
      e.preventDefault();
      // login logic
      loginUser({ email, password }).then(({ data }) => {
          if (data) {
              // socket work
              socket.emit("new-user");
              // navigate to the chat
              navigate("/user/:_id");
          }
      });
  };
  return (
    <div className="container">
         <div className="TitleWrap">
       <h1 className="MainTitle">Pitchdeck</h1>
       <h3  className="subTitle">Connect with Investors, Startups and More</h3>
       </div>
        <div className="Wrap">
            <h2>Welcome!</h2>
            <img className="logo" src={Design}/>
      <h2>Login to your Account</h2>
      <form onSubmit={(e) => handleLogin(e)}>
        <div>
          <label htmlFor="email">Email</label>
          {error && <p className="alert alert-danger">{error.data}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setEmail(e.target.value)} value={email} required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setPassword(e.target.value)} value={password} required />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <a className="authRoute" href="/register"> Sign up</a>
        </span>
      </form>
      </div>
    </div>
  );
}

export default Login;