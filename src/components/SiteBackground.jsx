import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/hexagulf-logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <img src={logo} alt="Hexagulf" />
          <strong>Hexagulf</strong>
        </div>
        <nav className="nav-links">
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/products", "Products & Services"],
            ["/projects", "Projects"],
            ["/contact", "Contact"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `chip ${isActive ? "active" : ""}`
              }
              end={to === "/"}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
