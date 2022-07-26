import { Link } from 'react-router-dom';
import './NavLink.css';

const image = require('../assets/planet.png');

function NavLink() {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img className="planet-img" src={image} alt="planet" />
        <h1 className="logo-name">
          <Link to="/">Space Travelers&apos; Hub</Link>
        </h1>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Rockets</Link>
        </li>
        <li className="nav-item">
          <Link to="/missions">Missions</Link>
        </li>
        <div className="vertical-line" />
        <li className="nav-item">
          <Link to="/my-profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLink;
