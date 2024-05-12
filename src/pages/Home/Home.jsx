/** @format */

import React from "react";
import CallToAction from "../../components/CallToAction";
import Nav from "../../components/Nav";
import Chicago from "../../components/Chicago";
import Footer from "../../components/Footer";
import Specials from "../../components/Specials";
import CustomersSay from "../../components/CustomerSay";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

function Home() {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});
	return (
		<>
			<Nav />
			<CallToAction />
			<Specials />
			<CustomersSay />
			<Chicago />
			<Footer />
			<Zoom in={trigger}>
				<div
					onClick={scrollToTop}
					style={{ position: "fixed", bottom: 16, right: 16 }}>
					<Fab
						sx={{ backgroundColor: "#f4ce14" }}
						size="small"
						aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</div>
			</Zoom>
		</>
	);
}

export default Home;
