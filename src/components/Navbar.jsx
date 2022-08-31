import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const image = require('../assets/planet.png');

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavOpen(false);
  };
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img className="planet-img" src={image} alt="planet" />
        <h1 className="logo-name">
          <NavLink to="/">Space Travelers&apos; Hub</NavLink>
        </h1>
      </div>
      <button type="button" className="btn-menu close" onClick={handleToggle}>
        <img src="/menu.svg" alt="menu-icon" />
      </button>
      <ul className={`nav-list ${navOpen ? "" : "hide"}`}>
        <button type="button" className="btn-menu close" onClick={closeMenu}>
          <img src="/close.svg" alt="menu-icon" />
        </button>
        <li className="nav-item">
          <NavLink to="/" onClick={closeMenu}>Rockets</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/missions" onClick={closeMenu}>Missions</NavLink>
        </li>
        <div className="vertical-line" />
        <li className="nav-item">
          <NavLink to="/my-profile" onClick={closeMenu}>My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
