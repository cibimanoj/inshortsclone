import React from "react";
import "./navbar.css";
import Drawer from "./Drawer";

const Navbar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menuicon">
        <Drawer setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="logo"
        height="80"
      />
    </div>
  );
};

export default Navbar;
