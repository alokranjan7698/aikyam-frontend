import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/Login/Login.css";

import "react-toastify/dist/ReactToastify.css";

const AlumniRegister = () => {
  const navigate = useNavigate();
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
  });

  const postImg = async (pic) => {
    try {
      const data = new FormData();
      data.append("upload_preset", "alumnipics");
      data.append("file", pic);

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/alokranjanjoshi07567/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const resData = await res.json();
      const picUrl = resData.url.toString();
      console.log("pic url " + picUrl);
      setUserRegister({ ...userRegister, pic: picUrl });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log("user register = " + userRegister);
    const {
      name,
      email,
      pic,
      gender,
      mobile,
      institution,
      pbatch,
      branch,
      currentPosition,
      location,
    } = userRegister;
    try {
      const res = await fetch("http://localhost:9000/alumni/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          pic,
          gender,
          mobile,
          institution,
          pbatch,
          branch,
          currentPosition,
          location,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegisterChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleRegisterSubmit}>
        <div className="login-input-box">
          <label>Enter your Name</label>
          <input
            type="text"
            required
            name="name"
            value={userRegister.name}
            onChange={handleRegisterChange}
          />
        </div>
        <div className="login-input-box">
          <label>Enter your Email</label>
          <input
            type="email"
            required
            name="email"
            value={userRegister.email}
            onChange={handleRegisterChange}
          />
        </div>

        <div className="login-input-box">
          <label>Enter your Mobile Number</label>
          <input
            type="number"
            required
            name="mobile"
            value={userRegister.mobile}
            onChange={handleRegisterChange}
          />
        </div>

        <div className="login-input-box">
          <label>Enter your Gender</label>
          <select
            style={{ height: "40px" }}
            name="gender"
            required
            value={userRegister.gender}
            onChange={handleRegisterChange}
          >
            <option>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="login-input-box">
          <label>Enter your Mobile Number</label>
          <input
            type="text"
            required
            name="institution"
            value={userRegister.institution}
            onChange={handleRegisterChange}
          />
        </div>

        <div className="login-input-box">
          <label>Enter your Passout Batch</label>
          <input
            type="number"
            required
            name="pbatch"
            value={userRegister.pbatch}
            onChange={handleRegisterChange}
          />
        </div>
        <div className="login-input-box">
          <label>Enter your Branch</label>
          <select
            style={{ height: "40px" }}
            name="branch"
            required
            value={userRegister.branch}
            onChange={handleRegisterChange}
          >
            <option>Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="EE">EE</option>
            <option value="I&E">I&E</option>
            <option value="CE">CE</option>
            <option value="ME">ME</option>
          </select>
        </div>
        <div className="login-input-box">
          <label>Current Job/ Position</label>
          <input
            type="text"
            required
            name="currentPosition"
            value={userRegister.currentPosition}
            onChange={handleRegisterChange}
          />
        </div>

        <div className="login-input-box">
          <label>Location</label>
          <input
            type="text"
            required
            name="location"
            value={userRegister.location}
            onChange={handleRegisterChange}
          />
        </div>
        <div className="login-input-box">
          <label>Image</label>
          <input
            type="file"
            required
            name="location"
            onChange={(e) => postImg(e.target.files[0])}
          />
        </div>

        <div className="login-input-box">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AlumniRegister;
