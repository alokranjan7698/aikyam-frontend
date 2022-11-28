import React, { useEffect } from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/Home/Home";
import Chat from "./components/chat/Chat";

import { useNavigate, Routes, Route } from "react-router-dom";
import Details from "./pages/RegisterDetails/Details";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </div>
  );
};

export default App;
