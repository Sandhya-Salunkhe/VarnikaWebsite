
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">
        Vanrikaa<span>.</span>
      </h2>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

        
<ul className={`nav-links ${menuOpen ? "active" : ""}`}>

  <li>
    <Link to="/" onClick={() => setMenuOpen(false)}>
      Home
    </Link>
  </li>

  <li>
    <Link to="/blouse-designs" onClick={() => setMenuOpen(false)}>
      Blouse Designs
    </Link>
  </li>

  <li>
    <a href="/#services" onClick={() => setMenuOpen(false)}>
      Services
    </a>
  </li>

  <li>
    <a href="/#about" onClick={() => setMenuOpen(false)}>
      About Us
    </a>
  </li>

  <li>
    <a href="/#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>
  </li>
  </ul>

    </nav>
  );
}

export default Navbar;
