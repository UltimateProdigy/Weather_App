import axios from "axios";
import React, {
	createContext,
	useContext,
	ReactNode,
	useEffect,
	useState,
} from "react";
import { WeatherEnv } from "../utils/funtions";

interface WeatherData {
	main: {
		temp: number;
		humidity: number;
	};
	weather: {
		description: string;
		icon: string;
	}[];
	name: string;
}

interface WeatherContextType {
	fetchWeather: (city: string) => Promise<void>;
	weather: WeatherData | null;
	loading: boolean;
	error: string | null;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

interface WeatherProviderProps {
	children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
	children,
}) => {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const API_KEY = WeatherEnv.API_KEY;

	const fetchWeather = async (city: string) => {
		if (!API_KEY) {
			setError(
				"API key is not set. Please check your environment variables."
			);
			return;
		}
		setLoading(true);
		setError(null);
		try {
			const response = await axios.get<WeatherData>(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
			);
			setWeather(response.data);
			console.log(response.data);
		} catch (error) {
			setError("Error fetching weather data. Please try again.");
			console.error("Error fetching weather data:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchWeather("LAGOS");
	}, []);

	return (
		<WeatherContext.Provider
			value={{ weather, fetchWeather, loading, error }}
		>
			{children}
		</WeatherContext.Provider>
	);
};

export const useWeather = () => {
	const context = useContext(WeatherContext);
	if (!context) {
		throw new Error("useWeather must be used within a WeatherProvider");
	}
	return context;
};
