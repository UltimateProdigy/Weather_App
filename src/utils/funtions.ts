export const WeatherEnv = {
	API_KEY: import.meta.env.VITE_WEATHER_API_KEY || "",
};

export const formatTime = (date: Date) => {
	return date.toLocaleString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});
};

export const formatDayAndDate = (date: Date) => {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const day = days[date.getDay()];
	const month = months[date.getMonth()];
	const dateNum = date.getDate();

	return `${day}, ${month} ${dateNum}`;
};
