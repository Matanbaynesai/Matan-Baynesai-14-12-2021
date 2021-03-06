import React from "react";
import "./navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Favorites from "../../Pages/Favorites/Favorites";

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar-container">
        <div className="logo">
          <img src="https://blog.herolo.co.il/wp-content/uploads/2019/12/logo.png" height="50" alt="" />
        </div>
        <ul className="nav-bar">
          <li>
            <Link to="/"><i className="fa fa-home">Home</i></Link>
          </li>
          <li>
            <Link to="/favorites"><i className="fa fa-star">Favorites</i></Link>
          </li>
        </ul>
        </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </Router>
  );
};
export default Navbar;
