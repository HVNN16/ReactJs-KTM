import React from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import "../styles/login.css"

function Navbar() {

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart"> Cart </Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart"> Cart </Link>
        <Link to="/login" className="loginstyle">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
