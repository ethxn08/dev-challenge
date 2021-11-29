import React from "react";
import logo from "../../assets/netflix-logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      <div className="logo-section">
        <img className="nav-logo" src={logo} alt="logo" />
        <Link to="/">
          <h2>Dev-Challenge</h2>
        </Link>
      </div>
      <div className="links-section">
        <h2>
          <Link to="/movies">Movies</Link>
        </h2>
        <h2>
          <Link to="/tv">TV</Link>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
