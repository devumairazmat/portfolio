import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Nav wrapper */}
      <div className="n-wrapper">
        {/* Nav left */}
        <div className="n-left">
          <div className="n-name">Umair</div>
          <span>toggle</span>
        </div>
        {/* Nav Right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>Home</li>
              <li>Services</li>
              <li>Experience</li>
              <li>Pertfolio</li>
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
