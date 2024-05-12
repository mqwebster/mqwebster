import React from "react";
import logo from "/public/images/logos/React.png";
import Image from "next/image";

import "./index.css";

export default function Navbar(props) {
  return (
    <nav className={`nav ${props.isDark ? "dark" : ""}`}>
      <div className="nav-logo">
        <Image
          src={logo}
          width={32}
          height={32}
          alt="React Logo"
          className="nav-logo__img"
        />
        <span>ReactFacts</span>
      </div>

      <div className="nav-toggle">
        <span className="nav-toggle__text-light">Light</span>
        <div className="nav-toggle__slider" onClick={props.toggle}>
          <div className="nav-toggle__slider-circle"></div>
        </div>
        <span className="nav-toggle__text-dark">Dark</span>
      </div>
    </nav>
  );
}
