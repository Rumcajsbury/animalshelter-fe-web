import React, { useState, useEffect } from "react";
import NavLinkBtn from "./common/NavLinkBtn";
import { Link } from "react-router-dom";

interface LogInfo {
  isLoggedIn: boolean;
}

const NavbarComponent: React.FC<LogInfo> = ({ isLoggedIn }: LogInfo) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link to="/" className="navbar-brand" href="#">
        ShenAn
      </Link>
      <div className="float-right" id="navbarDiv">
        <ul className="navbar-nav">
          {!isLoggedIn && (
            <>
              <NavLinkBtn route="login" label="Zaloguj się" />
              <NavLinkBtn route="register" label="Zarejestruj się" />
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
