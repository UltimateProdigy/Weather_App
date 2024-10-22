import { Input } from "antd";
import { useWeather } from "../context/weatherContext";
import { useState, useEffect } from "react";
import { formatTime, formatDayAndDate } from "../utils/funtions";
import { TempMax } from "../components/icons/TempMax";
import { TempMin } from "../components/icons/TempMin";
import { Humidity } from "../components/icons/Humidity";
import { Wind } from "../components/icons/Wind";

export default function Home() {
	const { weather } = useWeather();
	const [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setDateTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	const getBackground = () => {
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

	const backgroundContent = getBackground();
	const isVideoBackground = typeof backgroundContent !== "string";

	return (
		<div
			className={`relative ${
				!isVideoBackground ? backgroundContent : ""
			} bg-cover bg-no-repeat h-screen px-24 pt-8`}
		>
			{isVideoBackground && backgroundContent}
			<img src="/W.svg" alt="weather" />
			<div className="flex gap-4 mt-[50vh]">
				<p className="text-[100px]">{weather?.main?.humidity}°</p>
				<div>
					<p className="mt-[50px] text-3xl">{weather?.name}</p>
					<p className="mt-1">
						<span className="font-semibold">
							{formatTime(dateTime)}
						</span>
						<span className="mx-2">-</span>
						<span className="text-gray-200">
							{formatDayAndDate(dateTime)}
						</span>
					</p>
				</div>
				<img
					className="ml-4 mt-[60px] h-[50px]"
					src="/img/Cloudy.png"
					alt="cloud"
				/>
			</div>

			<div className="absolute bg-slate-400/30 backdrop-blur-sm w-[500px] h-screen right-0 top-0 border-l-2 border-gray-300 border-transparent p-8">
				<Input
					placeholder="Search Location"
					className="border-slate-200 placeholder:text-slate-200 focus:placeholder:text-gray-700 placeholder:opacity-75 bg-transparent"
				/>
				<div>
					{weather?.weather?.map((data: any) => (
						<div className="mt-10">
							<p className="text-xl font-bold">{`${data?.main} - ${data?.description}`}</p>
						</div>
					))}
					<div className="mt-10">
						<div className="flex justify-between">
							<p>Temp Max</p>
							<div className="flex gap-4">
								<p>{weather?.main?.temp_max}°</p>
								<TempMax />
							</div>
						</div>
                        <div className="flex justify-between pt-4">
							<p>Temp Min</p>
							<div className="flex gap-4">
								<p>{weather?.main?.temp_min}°</p>
								<TempMin />
							</div>
						</div>
                        <div className="flex justify-between pt-4">
							<p>Humidity</p>
							<div className="flex gap-4">
								<p>{weather?.main?.humidity}%</p>
								<Humidity />
							</div>
						</div>
                        <div className="flex justify-between pt-4">
							<p>Wind</p>
							<div className="flex gap-2">
								<p>{weather?.wind?.speed}km/h</p>
								<Wind />
							</div>
						</div>
					</div>
				</div>
                <hr className="mt-[70px]" />
			</div>
		</div>
	);
}
