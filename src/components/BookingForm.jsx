/** @format */

import React, { useEffect } from "react";
import {
	Box,
	Typography,
	TextField,
	Button,
	MenuItem,
	Select,
	FormControl,
	InputLabel,
	FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, dispatch }) => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			date: new Date().toISOString().slice(0, 10), // "YYYY-MM-DD" format
			time: availableTimes.times[0],
			guests: 1,
			occasion: "birthday",
		},
		validationSchema: Yup.object({
			date: Yup.date().required("Date is required"),
			time: Yup.string().required("Time is required"),
			guests: Yup.number()
				.min(1, "Must be at least 1")
				.max(10, "Must be at most 10")
				.required("Number of guests is required"),
			occasion: Yup.string()
				.oneOf(["birthday", "engagement", "anniversary"], "Invalid occasion")
				.required("Occasion is required"),
		}),
		onSubmit: (values) => {
			const response = true; // Simulate an API call response
			if (response) {
				localStorage.setItem("Bookings", JSON.stringify(values));
				// console.log(values);
				navigate("/confirmation");
			}
		},
	});

	useEffect(() => {
		dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
	}, [formik.values.date, dispatch]);

	return (
		<Box
			sx={{
				width: { xs: "90%", md: "66%", l: "66%", xl: "66%" },
				minHeight: "32rem",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 4.3,
				mt: "3rem",
				p: 3,
				backgroundColor: "#edefee",
				borderRadius: "10px",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
				ml: "auto",
				mr: "auto",
				mb: "3rem",
			}}>
			<Typography variant="h1" textAlign="center" sx={{ color: "#333333" }}>
				Book A Table
			</Typography>
			<Box
				component="form"
				onSubmit={formik.handleSubmit}
				sx={{ width: "100%", maxWidth: "500px", display: "grid", gap: 2 }}>
				<TextField
					label="Choose date"
					type="date"
					{...formik.getFieldProps("date")}
					error={formik.touched.date && Boolean(formik.errors.date)}
					helperText={formik.touched.date && formik.errors.date}
				/>
				<FormControl
					fullWidth
					error={formik.touched.time && Boolean(formik.errors.time)}>
					<InputLabel>Choose time</InputLabel>
					<Select label="Choose time" {...formik.getFieldProps("time")}>
						{availableTimes.times.map((time) => (
							<MenuItem key={time} value={time}>
								{time}
							</MenuItem>
						))}
					</Select>
					<FormHelperText>
						{formik.touched.time && formik.errors.time}
					</FormHelperText>
				</FormControl>
				<TextField
					label="Number of guests"
					type="number"
					{...formik.getFieldProps("guests")}
					error={formik.touched.guests && Boolean(formik.errors.guests)}
					helperText={formik.touched.guests && formik.errors.guests}
				/>
				<FormControl
					fullWidth
					error={formik.touched.occasion && Boolean(formik.errors.occasion)}>
					<InputLabel>Occasion</InputLabel>
					<Select label="Occasion" {...formik.getFieldProps("occasion")}>
						<MenuItem value="birthday">Birthday</MenuItem>
						<MenuItem value="engagement">Engagement</MenuItem>
						<MenuItem value="anniversary">Anniversary</MenuItem>
					</Select>
					<FormHelperText>
						{formik.touched.occasion && formik.errors.occasion}
					</FormHelperText>
				</FormControl>
				<Button
					type="submit"
					variant="contained"
					sx={{
						mt: 2,
						background: "#f4ce14",
						color: "#333333",
						fontWeight: "700",
						"&:hover": {
							backgroundColor: "#f4ce14",
							color: "#333333",
							fontWeight: "700",
						},
					}}>
					Book
				</Button>
			</Box>
		</Box>
	);
};

export default BookingForm;
