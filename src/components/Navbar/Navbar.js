import "./Navbar.css";

import {
  NavLink
} from "react-router-dom";

function Navbar() {

  return (

    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <div className="logo">

          <NavLink to="/">
            Ramu Kolasani
          </NavLink>

        </div>

        {/* NAV LINKS */}

        <ul className="nav-links">

          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/initiatives">
              Initiatives
            </NavLink>
          </li>

          <li>
            <NavLink to="/news">
              News
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery">
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/volunteer">
              Volunteer
            </NavLink>
          </li>

        </ul>

        {/* BUTTON */}

        <div className="nav-buttons">

          <NavLink
            to="/volunteer"
            className="join-btn"
          >
            Join Us
          </NavLink>

        </div>

      </div>

    </header>

  );
}

export default Navbar;