import getWeatherByCity from "./data-fetching/fetchWeather";
import getCityName from "./utlils/getCityName";

const weatherResult = document.getElementById("weather-result") as HTMLElement;
const getWeatherBtn = document.getElementById(
  "get-weather-btn"
) as HTMLButtonElement;
const weatherTemplate = document.getElementById(
  "weather-template"
) as HTMLTemplateElement;

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
  weatherResult.innerHTML = "";

  try {
    const data: WeatherResponse = await getWeatherByCity(city);

    if (!data.name) {
      weatherResult.textContent =
        "⚠️ City not found. Please try a different name.";
      return;
    }

    const templateClone = document.importNode(weatherTemplate.content, true);

    templateClone.querySelector(
      ".city-name"
    )!.textContent = `Weather in ${data.name}`;
    templateClone
      .querySelector(".weather-icon")!
      .setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
    templateClone.querySelector(".temp")!.textContent = `${data.main.temp}`;
    templateClone.querySelector(
      ".feels"
    )!.textContent = `${data.main.feels_like}`;
    templateClone.querySelector(".wind")!.textContent = `${data.wind.speed}`;
    templateClone.querySelector(".hum")!.textContent = `${data.main.humidity}`;

    weatherResult.appendChild(templateClone);
  } catch (error: any) {
    if (error.status === 404) {
      weatherResult.textContent =
        "⚠️ City not found. Please try a different name.";
    } else {
      weatherResult.textContent =
        "❌ An unexpected error occurred. Please try again later.";
    }
    console.error(error);
  }
};

getWeatherBtn.addEventListener("click", showWeather);

export default showWeather;
