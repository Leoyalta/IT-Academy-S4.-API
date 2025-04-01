interface WeatherResponse {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

const getWeatherByCity = async (city: string): Promise<WeatherResponse> => {
  const requestParams = {
    q: city,
    appid: import.meta.env.VITE_WEATHER_API_KEY,
    units: "metric",
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?${new URLSearchParams(
    requestParams
  )}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: WeatherResponse = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};

export default getWeatherByCity;
