const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#get-weather-btn");
const statusEl = document.querySelector("#status");
const weatherResult = document.querySelector("#weather-result");

// API key removed for security reasons
const API_KEY = "my_api_key";
const Base_URL = "https://api.openweathermap.org/data/2.5/weather";

//api bata data fetch
async function fetchWeather(city) {
    const url = `${Base_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("City not found");
    }
    return await response.json();
}

//*render weather in Ui
function renderWeather(data) {
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherResult.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <img id="weather-icon" src="${iconUrl}" alt="weather icon" />
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

//**search btn */
searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // Clear previous data and show loading
    statusEl.textContent = "Loading...";
    statusEl.classList.add("loading");
    weatherResult.innerHTML = "";

    try {
        const data = await fetchWeather(city);
        statusEl.textContent = "";
        statusEl.classList.remove("loading");
        renderWeather(data);
        // console.log(data);  //* debugging, value in console
        // return data;
    } catch (error) {
        statusEl.textContent = error.message;
        statusEl.classList.remove("loading");
        weatherResult.innerHTML = "";
    }
});






