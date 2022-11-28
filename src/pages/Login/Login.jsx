import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  googleProvider,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.config";

const Login = () => {
  const auth = getAuth();

  const navigate = useNavigate();
  const [userlogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const handleloginUser = (e) => {
    e.preventDefault();
    // console.log(userlogin);
    signInWithEmailAndPassword(auth, userlogin.email, userlogin.password)
      .then((response) => {
        navigate("/");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("Please check the Password");
        }
        if (error.code === "auth/user-not-found") {
          toast.error("Please check the Email");
        }
      });
  };
  const handleChangeloginUser = (e) => {
    setUserLogin({ ...userlogin, [e.target.name]: e.target.value });
  };
  const handleGoogleSignin = async () => {
    await signInWithPopup(auth, googleProvider);
    navigate("/details");
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleloginUser}>
          <div className="login-input-box">
            <label>Enter your Email</label>
            <input
              type="email"
              required
              onChange={handleChangeloginUser}
              name="email"
              value={userlogin.email}
            />
          </div>
          <div className="login-input-box">
            <label>Enter your Password</label>
            <input
              type="password"
              required
              onChange={handleChangeloginUser}
              name="password"
              value={userlogin.password}
            />
          </div>
          <div className="login-input-box">
            <button>Login</button>
          </div>
        </form>
        <div className="login-input-box">
          <button onClick={handleGoogleSignin}>Sign in with Google</button>
        </div>
        <div className="login-input-box" style={{ textAlign: "center" }}>
          <p>
            Don't have an account ?
            <span className="render-to-signup">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
