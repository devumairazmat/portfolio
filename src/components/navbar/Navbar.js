import React from "react";
import Toggle from "../toogle/Toggle";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Nav wrapper */}
      <div className="n-wrapper">
        {/* Nav left */}
        <div className="n-left">
          <div className="n-name">Umair</div>
          <span>
            <Toggle />
          </span>
        </div>
        {/* Nav Right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>Home</li>
              <li>Services</li>
              <li>Experience</li>
              <li>Portfolio</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <button className="button n-button">Contact</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
