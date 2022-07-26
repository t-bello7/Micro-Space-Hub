import { NavLink } from 'react-router-dom';
import './Navbar.css';

const image = require('../assets/planet.png');

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img className="planet-img" src={image} alt="planet" />
        <h1 className="logo-name">
          <NavLink to="/">Space Travelers&apos; Hub</NavLink>
        </h1>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <div className="vertical-line" />
        <li className="nav-item">
          <NavLink to="/my-profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
