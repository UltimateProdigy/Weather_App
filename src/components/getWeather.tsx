export const getBackground = ({ weather }: any) => {
	if (!weather || !weather?.weather || !weather?.weather[0]) {
		return "bg-[url('/img/sun.jpg')]";
	}

	switch (weather?.weather[0]?.main.toLowerCase()) {
		case "thunderstorm":
			return (
				<video
					autoPlay
					muted
					loop
					className="fixed top-0 left-0 min-w-full min-h-full object-cover -z-10"
				>
					<source src="/vid/thunderstorm.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			);
		case "rain":
			return (
				<video
					autoPlay
					muted
					loop
					className="fixed top-0 left-0 min-w-full min-h-full object-cover -z-10"
				>
					<source src="/vid/rain.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			);
		case "clouds":
			return (
				<video
					autoPlay
					muted
					loop
					className="fixed top-0 left-0 min-w-full min-h-full object-cover -z-10"
				>
					<source src="/vid/cloudy.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			);
		case "clear":
			return (
				<video
					autoPlay
					muted
					loop
					className="fixed top-0 left-0 min-w-full min-h-full object-cover -z-10"
				>
					<source src="/vid/cloudy.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			);
		case "snow":
			return (
				<video
					autoPlay
					muted
					loop
					className="fixed top-0 left-0 min-w-full min-h-full object-cover -z-10"
				>
					<source src="/vid/snow.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			);
		default:
			return "bg-[url('/img/sun.jpg')]";
	}
};
