import React, { useState } from "react";

const NavbarComponent: React.FC = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand" href="#">
        ShenAn
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="float-right"
        id="navbarDiv"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Zaloguj się
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Zarejestruj się
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
