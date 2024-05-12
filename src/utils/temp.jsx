/** @format */

// Reducer to manage booking times state
export const updateTimes = (state, action) => {
	switch (action.type) {
		case "UPDATE_TIMES":
			// Fetch new times based on the provided date
			try {
				const newTimes = fetchAPI(new Date(action.date));
				return { ...state, times: newTimes, error: null };
			} catch (error) {
				// Handle any errors that might occur during fetching times
				return { ...state, error: "Failed to fetch times." };
			}

		case "RESET_TIMES":
			// Optionally reset to initial state or handle other cleanup tasks
			return initializeTimes();

		default:
			// Return the current state if no action matches
			return state;
	}
};

// Function to initialize the state with times for today's date
export const initializeTimes = () => {
	const today = new Date();
	return { times: fetchAPI(today), error: null };
};

// Function simulating an API request to fetch available times based on the date
export const fetchAPI = (date) => {
	const result = [];
	const random = seededRandom(date.getDate()); // Pseudo-random generator based on date
	for (let i = 17; i <= 23; i++) {
		if (random() < 0.5) {
			result.push(`${i}:00`);
		}
		if (random() < 0.5) {
			result.push(`${i}:30`);
		}
	}
	return result;
};

// Seeded random function to generate consistent pseudo-random numbers
const seededRandom = (seed) => {
	const m = 2 ** 35 - 31;
	const a = 185852;
	let s = seed % m;
	return function () {
		return (s = (s * a) % m) / m;
	};
};
