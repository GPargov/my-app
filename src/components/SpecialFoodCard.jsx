/** @format */

import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const SpecialFoodCard = ({ imageUrl, title, price, description }) => {
	return (
		<Card
			sx={{
				maxWidth: 300,
				m: 1,
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}>
			<CardMedia component="img" height="140" image={imageUrl} alt={title} />
			<CardContent
				sx={{
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Typography
						variant="p"
						component="div"
						sx={{ fontWeight: "700", marginBottom: "0px", fontSize: "1.2rem" }}>
						{title}
					</Typography>
					<Typography
						variant="h6"
						color="text.primary"
						sx={{
							ml: 2,
							color: "#ee9972",
							fontWeight: "700",
							alignSelf: "center",
						}}>
						${price}
					</Typography>
				</Box>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ width: "100%", mt: 1.5 }}>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default SpecialFoodCard;
