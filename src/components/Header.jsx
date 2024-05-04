/** @format */

import React from "react";
import Button from "@mui/material/Button";

import "../css/header.css";

import restaurantfood from "../assets/restauranfood.jpg";

function Header() {
	return (
		<div className="main-container">
			<div className="header-container">
				<div className="header-content">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						We are family owned Mediterranean restaurant, focused on traditional
						recipes served with a modern twist.
					</p>
					<Button
						variant="contained"
						sx={{
							backgroundColor: "#f4ce14",
							"&:hover": {
								backgroundColor: "#f4ce14",
							},
							color: "#333333",
							fontWeight: "700",
							borderRadius: "7px",
						}}>
						Reserve a table
					</Button>
				</div>
				<div className="header-image">
					<img src={restaurantfood} alt="food plate" />
				</div>
			</div>
		</div>
	);
}

export default Header;
