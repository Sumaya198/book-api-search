
import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

function NavTabs() {
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <ul className="nav">
        <li className="nav-item">
          <Link className="searchNav" to="/">
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link className="savedNav"
            to="/saved"
          >
            Saved
          </Link>
        </li>
      </ul>

  </nav>
    );
  }

export default NavTabs;