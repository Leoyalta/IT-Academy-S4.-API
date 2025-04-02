import getWeatherByCity from "./data-fetching/fetchWeather";
import getCityName from "./utlils/getCityName";

const weatherResult = document.getElementById("weather-result") as HTMLElement;
const getWeatherBtn = document.getElementById(
  "get-weather-btn"
) as HTMLButtonElement;

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
    icon: string;
  }[];
  error?: string;
}

const showWeather = async (): Promise<void> => {
  const city: string = getCityName();
  const data: WeatherResponse = await getWeatherByCity(city);

  if (data.error) {
    weatherResult.textContent = data.error;
    return;
  }

  const { temp, feels_like, humidity } = data.main;
  const { speed: windSpeed } = data.wind;
  const icon: string = data.weather[0].icon;

  weatherResult.innerHTML = `
    <div class="weath-box"> 
      <h1>Weather in ${data.name}</h1>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
    </div>
    <div class="weath-conditions">
      <p>Temperature: <strong>${temp}°C</strong></p>
      <p>Feels like: <strong>${feels_like}°C</strong></p>
      <p>Wind speed: <strong>${windSpeed} m/s</strong></p>
      <p>Humidity: <strong>${humidity}%</strong></p>
    </div>
  `;
};

// Додаємо обробник подій
getWeatherBtn.addEventListener("click", showWeather);

export default showWeather;
