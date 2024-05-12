/** @format */

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CustomersSayCard from "./CustomerSayCard";

const CustomersSay = () => {
	return (
		<Box
			sx={{
				width: { xs: "90%", md: "66%" },
				maxHeight: "200",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 4.3,
				pt: 1,
				mt: 2,
				mb: 20,
				ml: "auto",
				mr: "auto",
				position: "relative",
				"::before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: -1,
					backgroundColor: "inherit",
				},
			}}>
			<Typography
				variant="h3"
				sx={{
					textAlign: "center",
					width: "100%",
					mt: 2,
					color: "#333333",
					fontWeight: "bold",
				}}>
				What our customers say!
			</Typography>
			<Grid
				container
				spacing={2}
				justifyContent="center"
				sx={{ width: "100%" }}>
				{/* Repeat CustomersSayCard for each testimonial */}
				<CustomersSayCard
					rating={5}
					customerImg="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					customerName="Leo"
					testimonial="I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
				/>
				<CustomersSayCard
					rating={3}
					customerImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					customerName="Gabi"
					testimonial="I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!"
				/>
				<CustomersSayCard
					rating={4}
					customerImg="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					customerName="Bruno"
					testimonial="I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. Not to mention the presentation, which was beautiful. It was an amazing dining experience!"
				/>
			</Grid>
		</Box>
	);
};

export default CustomersSay;
