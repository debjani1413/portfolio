import React from "react";
import "../styledComponents/navBar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li>
          <a href="#home" className="li">
            Home
          </a>
        </li>
        <li>
          <a href="#skills" className="li">
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" className="li">
            Experience
          </a>
        </li>
        <li>
          <a href="#work" className="li">
            Work
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
