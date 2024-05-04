/** @format */

import React from "react";
import "../css/nav.css";
import logo from "../assets/Asset16@4x.png";

function Nav() {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img src={logo} alt="Logo" />
			</div>
			<ul className="navbar-items">
				<li className="navbar-item">
					<a href="#home">Home</a>
				</li>
				<li className="navbar-item">
					<a href="#about">About</a>
				</li>
				<li className="navbar-item">
					<a href="#menu">Menu</a>
				</li>
				<li className="navbar-item">
					<a href="#reservations">Reservations</a>
				</li>
				<li className="navbar-item">
					<a href="#order">Order</a>
				</li>
				<li className="navbar-item">
					<a href="#login">Login</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
