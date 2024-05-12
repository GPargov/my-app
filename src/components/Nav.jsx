/** @format */

import React from "react";
import { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Box,
	List,
	ListItem,
	ListItemButton,
	Drawer,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

import logo from "../assets/Asset16@4x.png";
import basketImg from "../assets/basket .svg";

const Nav = () => {
	const navigate = useNavigate();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<List>
				{["Home", "About", "Menu", "Reservations", "Order", "Login"].map(
					(text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton
								sx={{ textAlign: "center" }}
								component={HashLink}
								to={`/${text.toLowerCase()}`}>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					)
				)}
			</List>
		</Box>
	);

	return (
		<AppBar
			position="block"
			color="default"
			sx={{
				padding: "10px",
				width: "100%",
				margin: "2rem auto",
				maxWidth: "1200px",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Toolbar
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
				}}>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2, display: { sm: "none" } }}>
					<MenuIcon />
				</IconButton>
				<IconButton sx={{ justifySelf: "start" }} onClick={() => navigate("/")}>
					<img
						src={logo}
						alt="Logo"
						style={{ height: "50px", cursor: "pointer" }}
					/>
				</IconButton>
				<Box
					sx={{
						display: { xs: "none", sm: "flex" },
						alignItems: "center",
						gap: "10px",
					}}>
					<Button color="inherit" component={HashLink} to="/" sx={linkStyle}>
						Home
					</Button>
					<Button
						color="inherit"
						component={HashLink}
						to="/#about"
						sx={linkStyle}>
						About
					</Button>
					<Button
						color="inherit"
						component={HashLink}
						to="/menu"
						sx={linkStyle}>
						Menu
					</Button>
					<Button
						color="inherit"
						component={HashLink}
						to="/bookings"
						sx={linkStyle}>
						Reservations
					</Button>
					<Button color="inherit" component={HashLink} to="#" sx={linkStyle}>
						Order
					</Button>
					<Button color="inherit" component={HashLink} to="#" sx={linkStyle}>
						Login
					</Button>
					<IconButton sx={{ ml: 2 }}>
						<img src={basketImg} alt="Basket" />
					</IconButton>
				</Box>
			</Toolbar>
			<Drawer
				anchor="left"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				sx={{
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
				}}>
				{drawer}
			</Drawer>
		</AppBar>
	);
};

const linkStyle = {
	textDecoration: "none",
	color: "black",
	padding: "10px 15px",
	borderRadius: "5px",
	fontWeight: "900",
	"&:hover": {
		backgroundColor: "rgb(241, 241, 160)",
		borderRadius: "7px",
	},
};

export default Nav;
