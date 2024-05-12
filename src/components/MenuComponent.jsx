/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	Divider,
	Paper,
	Button,
} from "@mui/material";

const menuItems = [
	{ name: "Margherita Pizza", price: "$12.99" },
	{ name: "Pasta Carbonara", price: "$15.50" },
	{ name: "Mushroom Risotto", price: "$16.20" },
	{ name: "Panzenella", price: "$10.50" },
	{ name: "Bruschetta", price: "$9.99" },
	{ name: "Tiramisu", price: "$6.99" },
	{ name: "Panna Cotta", price: "$7.50" },
	{ name: "Focaccia Bread", price: "$4.99" },
	{ name: "Caprese Salad", price: "$10.99" },
	{ name: "Pesto Pasta", price: "$14.30" },
];

const MenuComponent = () => {
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: 4,
			}}>
			<Paper
				elevation={6}
				sx={{ maxWidth: 600, width: "100%", padding: 2, mb: "2rem" }}>
				<Typography
					variant="h4"
					sx={{
						textAlign: "center",
						mb: 2,
						fontWeight: "bold",
						color: "#333333",
					}}>
					Menu
				</Typography>
				<List>
					{menuItems.map((item, index) => (
						<React.Fragment key={index}>
							<ListItem sx={{ justifyContent: "space-between" }}>
								<ListItemText
									primary={item.name}
									primaryTypographyProps={{
										fontWeight: "medium",
										color: "#333333",
									}}
								/>
								<Typography
									variant="body1"
									sx={{
										fontWeight: "medium",
										color: "#333333",
										alignItems: "end",
									}}>
									{item.price}
								</Typography>
							</ListItem>
							{index < menuItems.length - 1 && (
								<Divider variant="inset" component="li" />
							)}
						</React.Fragment>
					))}
				</List>
				{/* <Button
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
						margin: "auto",
					}}
					onClick={() => navigate("/home")}>
					Back to home
				</Button> */}
			</Paper>
		</Box>
	);
};

export default MenuComponent;
