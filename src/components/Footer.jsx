/** @format */

import React from "react";
import { Box, Typography, Link, Grid, Container, Stack } from "@mui/material";

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				color: "common.white",
				position: "relative",
				mt: 3,
				py: 3,
				backgroundColor: "#495e57",
				"&:before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					bgcolor: "background.paper",
					opacity: 0.5,
					zIndex: -1,
				},
			}}>
			<Container maxWidth="lg">
				<Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
					<Grid item xs={12} sm={4}>
						<Typography variant="h6">Little Lemon</Typography>
						<Stack direction="column" spacing={1}>
							<Link
								href="#"
								color="inherit"
								sx={{
									textDecoration: "none",
									"&:hover": {
										textDecoration: "underline",
									},
								}}>
								Home
							</Link>
							<Link
								href="#"
								color="inherit"
								sx={{
									textDecoration: "none",
									"&:hover": {
										textDecoration: "underline",
									},
								}}>
								Menu
							</Link>
							<Link
								href="#"
								color="inherit"
								sx={{
									textDecoration: "none",
									"&:hover": {
										textDecoration: "underline",
									},
								}}>
								Reservations
							</Link>
							<Link
								href="#"
								color="inherit"
								sx={{
									textDecoration: "none",
									"&:hover": {
										textDecoration: "underline",
									},
								}}>
								Order Online
							</Link>
							<Link
								href="#"
								color="inherit"
								sx={{
									textDecoration: "none",
									"&:hover": {
										textDecoration: "underline",
									},
								}}>
								Login
							</Link>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" gutterBottom>
							Contact
						</Typography>
						<Stack direction="column" spacing={1}>
							<Typography>
								Little Lemon
								<br />
								331 E LaSalle
								<br />
								Street Chicago, Illinois 60602 USA
							</Typography>
							<Link
								href="tel:+551199999999"
								color="inherit"
								sx={{
									textDecoration: "none",
									"&:hover": {
										textDecoration: "underline",
									},
								}}>
								+55 11 9999-9999
							</Link>
							<Link
								href="mailto:contact@littlelemon.com"
								color="inherit"
								sx={{
									textDecoration: "none",
									"&:hover": {
										textDecoration: "underline",
									},
								}}>
								contact@littlelemon.com
							</Link>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" gutterBottom>
							Social Media
						</Typography>
						<Stack direction="column" spacing={1}>
							<Link
								href="https://www.facebook.com/littlelemon"
								color="inherit"
								sx={{
									textDecoration: "none",
									"&:hover": {
										textDecoration: "underline",
									},
								}}>
								Facebook
							</Link>
							<Link
								href="https://www.instagram.com/littlelemon"
								color="inherit"
								sx={{
									textDecoration: "none",
									"&:hover": {
										textDecoration: "underline",
									},
								}}>
								Instagram
							</Link>
							<Link
								href="https://twitter.com/littlelemon"
								color="inherit"
								sx={{
									textDecoration: "none",
									"&:hover": {
										textDecoration: "underline",
									},
								}}>
								Twitter
							</Link>
						</Stack>
					</Grid>
				</Grid>
			</Container>
			<Typography
				variant="body2"
				color="textSecondary"
				align="center"
				sx={{ mt: 4, color: "#fff" }}>
				© 2024 Little Lemon. All rights reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
