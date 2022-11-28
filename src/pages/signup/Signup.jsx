import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { app } from "../../utils/firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Signup = () => {
  const auth = getAuth(app);

  const navigate = useNavigate();

  const [userSignUp, setUserSignUp] = useState({
    email: "",
    password: "",
  });

  const handleSignUpUser = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
      .then((res) => {
        alert("successfully signup up");
        navigate("/details");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleChangeSignUpUser = (e) => {
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSignUpUser}>
          <div className="login-input-box">
            <label>Enter your Email</label>
            <input
              type="email"
              required
              onChange={handleChangeSignUpUser}
              name="email"
              value={userSignUp.email}
            />
          </div>
          <div className="login-input-box">
            <label>Enter your Password</label>
            <input
              type="password"
              required
              onChange={handleChangeSignUpUser}
              name="password"
              value={userSignUp.password}
            />
          </div>
          <div className="login-input-box">
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
