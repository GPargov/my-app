/** @format */

import React, { useEffect, useState } from "react";
import {
	Box,
	Typography,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = (props) => {
	const navigate = useNavigate();
	const [booking, setBooking] = useState(null);

	useEffect(() => {
		const storedBooking = localStorage.getItem("Bookings");
		if (storedBooking) {
			setBooking(JSON.parse(storedBooking));
		}
	}, []);

	return (
		<Box
			{...props}
			sx={{
				width: { xs: "90%", md: "63%" },
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 4,
				mt: 6,
				mb: 6,
				ml: "auto",
				mr: "auto",
			}}>
			<Paper
				elevation={6}
				sx={{
					width: "100%",
					padding: 3,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 3,
					borderRadius: 2,
					backgroundColor: "background.paper",
				}}>
				<Typography
					variant="h4"
					sx={{ fontWeight: "bold", color: "#333333", mt: "1.5rem" }}>
					Thank you for your reservation!
				</Typography>
				{booking && (
					<TableContainer
						component={Paper}
						sx={{
							maxWidth: 450,
							width: "100%",
							backgroundColor: "#edefee",
							mb: 2,
						}}>
						<Table sx={{ minWidth: 300 }} aria-label="simple table">
							<TableBody>
								<TableRow>
									<TableCell
										component="th"
										scope="row"
										sx={{ fontWeight: "bold" }}>
										Occasion
									</TableCell>
									<TableCell align="right">{booking.occasion}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										component="th"
										scope="row"
										sx={{ fontWeight: "bold" }}>
										Guests
									</TableCell>
									<TableCell align="right">{booking.guests}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										component="th"
										scope="row"
										sx={{ fontWeight: "bold" }}>
										Date
									</TableCell>
									<TableCell align="right">{booking.date}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										component="th"
										scope="row"
										sx={{ fontWeight: "bold" }}>
										Time
									</TableCell>
									<TableCell align="right">{booking.time}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				)}
				<Button
					variant="contained"
					color="primary"
					onClick={() => navigate("/")}
					sx={{
						maxWidth: 300,
						mb: "1.5rem",
						backgroundColor: "#f4ce14",
						color: "#333333",
						fontWeight: "700",
						"&:hover": {
							backgroundColor: "#f4ce14",
							color: "#333333",
							fontWeight: "700",
						},
					}}>
					Back to Home
				</Button>
			</Paper>
		</Box>
	);
};

export default ConfirmedBooking;
