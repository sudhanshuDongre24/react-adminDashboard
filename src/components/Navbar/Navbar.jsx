import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="" />
        <span>Iamadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/4050023/pexels-photo-4050023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="icon"
          />
          <span>Sam</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
