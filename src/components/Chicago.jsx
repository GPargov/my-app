/** @format */

import React from "react";
import { Box, Typography } from "@mui/material";
import Mario_and_Adrian_A from "../assets/Mario and Adrian A.jpg";
import Mario_and_Adrian_B from "../assets/Mario and Adrian b.jpg";

const Chicago = () => {
	return (
		<Box
			id="about"
			sx={{
				width: { xs: "90%", md: "66%" },
				height: { xs: "auto", md: "70vh" },
				// minHeight: "65.1rem",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				color: "white",
				gap: "1.5rem",
				flexDirection: { xs: "column", md: "row" },
				padding: { xs: 0, md: 0 },
				ml: "auto",
				mr: "auto",
				mb: "2.5rem",
			}}>
			<Box
				sx={{
					width: "70%",
					display: "flex",
					flexDirection: "column",
					alignItems: { xs: "center", md: "flex-start" },
					textAlign: { xs: "center", md: "left" },
				}}>
				<Typography variant="h2" color={"#333333"} sx={{ mb: 2 }}>
					Little Lemon
				</Typography>
				<Typography variant="h4" color={"#333333"} sx={{ mb: 2 }}>
					Chicago
				</Typography>
				<Typography sx={{ maxWidth: "60%", mb: 2, color: "#333333" }}>
					Little Lemon is owned by two Italian brothers, Mario and Adrian, who
					moved to the United States to pursue their shared dream of owning a
					restaurant.
				</Typography>
				<Typography sx={{ maxWidth: "63%", color: "#333333" }}>
					To craft the menu, Mario relies on family recipes and his experience
					as a chef in Italy. Adrian does all the marketing for the restaurant
					and led the effort to expand the menu beyond classic Italian to
					incorporate additional cuisines from the Mediterranean region.
				</Typography>
			</Box>
			<Box
				sx={{
					display: { xs: "none", md: "flex" },
					flexDirection: "row",
					justifyContent: "flex-start",
					alignItems: "flex-start",
					position: "relative",
				}}>
				<img
					src={Mario_and_Adrian_A}
					alt="Mario and Adrian"
					style={{
						width: "24.7rem",
						height: "23.8rem",
						objectFit: "cover",
						position: "absolute",
						left: "-12rem",
						top: "4rem",
						zIndex: 2,
						borderRadius: "10px",
					}}
				/>
				<img
					src={Mario_and_Adrian_B}
					alt="Mario and Adrian"
					style={{
						width: "24.7rem",
						height: "23.8rem",
						objectFit: "cover",
						borderRadius: "10px",
					}}
				/>
			</Box>
		</Box>
	);
};

export default Chicago;
