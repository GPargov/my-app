/** @format */

import React, { useReducer } from "react";
import Nav from "../../components/Nav";
import BookingForm from "../../components/BookingForm";
import Footer from "../../components/Footer";
import { updateTimes, initializeTimes } from "../../utils/temp";

function Bookingpage() {
	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
	return (
		<>
			<Nav />
			<BookingForm availableTimes={availableTimes} dispatch={dispatch} />
			<Footer />
		</>
	);
}

export default Bookingpage;
