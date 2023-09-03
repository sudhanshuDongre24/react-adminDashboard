import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/src/assets/logo.svg" alt="" />
        <span>Iamadmin</span>
      </div>
      <div className="icons">
        <img src="/src/assets/search.svg" alt="" className="icon" />
        <img src="/src/assets/app.svg" alt="" className="icon" />
        <img src="/src/assets/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/src/assets/notifications.svg" alt="" className="icon" />
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
        <img src="/src/assets/settings.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
