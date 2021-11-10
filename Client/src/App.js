import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
