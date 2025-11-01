import React from "react";
import logo from "../assets/hexagulf-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container row">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={logo} alt="logo" style={{ height: 22 }} />
          <span>
            © {new Date().getFullYear()} Hexagulf Establishment. All rights reserved.
          </span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
