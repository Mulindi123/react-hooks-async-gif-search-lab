import React from "react";
import { Link } from "react-router-dom";

function NavBar({ color, title }) {
  const colors = {
    black: "navbar-inverse",
    white: "navbar-default",
  };

  return (
    <nav className={`navbar ${colors[color]}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">{title}</span>
          <button><Link to="/">GifListContainer</Link></button>
          <button><Link to="/giflist">GifList</Link></button>
          <button><Link to="/gifsearch">GifListSearch</Link></button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
