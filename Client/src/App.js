import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Footer from "./components/footer/Footer";
import SinglePost from "./components/single post page/SinglePostPage";
import Post from "./components/post/Post";
import Profile from "./components/profile/Profile";
import { Context } from "./login context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/:id" element={<SinglePost />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/user/:id" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
