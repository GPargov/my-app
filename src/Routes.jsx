/** @format */

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Bookingpage from "./pages/Booking/Bookingpage";
import ConfirmationPage from "./pages/Confirmation/ConfirmationPage";
import MenuPage from "./pages/Menu/MenuPage";

export default function () {
	return (
		<Routes>
			<Route element={<Home />} path="/" />
			<Route element={<Bookingpage />} path="/bookings" />
			<Route element={<ConfirmationPage />} path="/confirmation" />
			<Route element={<MenuPage />} path="/menu" />
		</Routes>
	);
}
