import "./Navbar.css";

import {
  NavLink
} from "react-router-dom";

import {
  useState
} from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <div className="logo">

          <NavLink
            to="/"
            onClick={closeMenu}
          >
            Ramu Kolasani
          </NavLink>

        </div>

        {/* MOBILE MENU ICON */}

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? "✕" : "☰"}

        </div>

        {/* NAVIGATION */}

        <ul
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >

          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/initiatives"
              onClick={closeMenu}
            >
              Initiatives
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/news"
              onClick={closeMenu}
            >
              News
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/volunteer"
              onClick={closeMenu}
            >
              Volunteer
            </NavLink>
          </li>

        </ul>

      </div>

    </header>

  );
}

export default Navbar;