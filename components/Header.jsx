import React from "react";
import "./Header.css";
import { FaBell } from "react-icons/fa";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="d">D</span>eet.me | vardan.sharma
      </div>
      <div className="buttons">
        <button className="login-button">Login</button>
        <button className="notif-button" />
      </div>
    </header>
  );
}

export default Header;
