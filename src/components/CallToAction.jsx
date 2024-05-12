/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import "../css/CallToAction.css";

import restaurantfood from "../assets/restauranfood.jpg";

function Header() {
	const navigate = useNavigate();
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
						}}
						onClick={() => navigate("/bookings")}>
						Book a table
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
