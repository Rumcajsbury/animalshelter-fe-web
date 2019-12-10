import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps{
    label: string,
    route: string
}

const NavLinkBtn: React.FC<NavLinkProps> = ({label, route}: NavLinkProps) => {
  return (
    <li className="nav-item">
      <Link to={`/${route}`} className="nav-link">
        {label}
      </Link>
    </li>
  );
};

export default NavLinkBtn;
