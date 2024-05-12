/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

import { Grid, Button, Typography, Box } from "@mui/material";
import SpecialFoodCard from "../components/SpecialFoodCard";
import greekSalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";

const Specials = () => {
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				width: "66%",
				my: 6,
				mx: "auto",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 4.3,
				marginTop: "15rem",
				marginBottom: "15rem",
			}}>
			<Grid
				container
				justifyContent="space-between"
				alignItems="center"
				sx={{
					width: "100%",
					mb: 2,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}>
				<Grid item xs={12} sm={8}>
					<Typography
						variant="h4"
						gutterBottom
						sx={{ color: "#333333", fontWeight: "800" }}>
						This week's specials!
					</Typography>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Button
						variant="contained"
						sx={{
							width: "100%",
							maxWidth: "fit-content",
							background: "#f4ce14",
							"&:hover": {
								backgroundColor: "#f4ce14",
							},
							color: "#333333",
							fontWeight: "700",
						}}
						onClick={() => navigate("/menu")}>
						Online Menu
					</Button>
				</Grid>
			</Grid>
			<Grid
				container
				justifyContent="space-between"
				alignItems="stretch"
				sx={{ width: "100%", gap: { xs: 2, md: 2, lg: 2, xl: 2 } }}>
				<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
					<SpecialFoodCard
						imageUrl={greekSalad}
						title="Greek Salad"
						price={12.99}
						description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
					/>
				</Grid>
				<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
					<SpecialFoodCard
						imageUrl={bruchetta}
						title="Bruchetta"
						price={7.99}
						description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
					/>
				</Grid>
				<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
					<SpecialFoodCard
						imageUrl={lemonDessert}
						title="Lemon Dessert"
						price={6.99}
						description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Specials;
