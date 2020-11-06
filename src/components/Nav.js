import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav(props) {
  return (
    <nav className="menu">
      <ul>
        <div>
        <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/cart">
            <li>Cart({props.getTotalQuantity()})</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
