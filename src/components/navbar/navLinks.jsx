import React from "react";
import "./style.navLinks.css";
import { NavLink } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <>
      <div className="navMenu">
        <NavLink className="Navbuttons" to="/Home">
          Home
        </NavLink>
        <NavLink className="Navbuttons" to="/Service">
          Service
        </NavLink>
        <NavLink className="Navbuttons" to="/News">
          News
        </NavLink>
        <NavLink className="Navbuttons" to="/Contact">
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default NavbarLinks;
