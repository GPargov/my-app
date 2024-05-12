/** @format */

import React, { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	Rating,
	Avatar,
	Box,
	Button,
} from "@mui/material";

const CustomersSayCard = ({
	rating,
	customerImg,
	customerName,
	testimonial,
}) => {
	// State to manage the expanded/collapsed state of the testimonial
	const [isExpanded, setIsExpanded] = useState(false);

	// Function to toggle the expanded state
	const handleExpandClick = () => {
		setIsExpanded(!isExpanded);
	};

	const displayedTestimonial = isExpanded
		? testimonial
		: `${testimonial.slice(0, 60)}${testimonial.length > 60 ? "..." : ""}`;

	return (
		<Card
			sx={{ maxWidth: 300, m: 1, display: "flex", flexDirection: "column" }}>
			<CardContent>
				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
					<Avatar
						src={customerImg}
						alt={customerName}
						sx={{ width: 56, height: 56 }}
					/>
					<Typography gutterBottom variant="h6" component="div">
						{customerName}
					</Typography>
				</Box>
				<Rating value={rating} precision={0.5} readOnly />
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ width: "100%" }}>
					{displayedTestimonial}
				</Typography>
				{testimonial.length > 60 && (
					<Button
						size="small"
						color="primary"
						sx={{ textDecoration: "underline" }}
						onClick={handleExpandClick}>
						{isExpanded ? "Collapse" : "Read more"}
					</Button>
				)}
			</CardContent>
		</Card>
	);
};

export default CustomersSayCard;
