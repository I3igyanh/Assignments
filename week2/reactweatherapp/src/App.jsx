import { useState } from 'react'
import SearchForm from './Components/SearchForm';
import WeatherCard from './Components/WeatherCard';
import StatusMessage from './Components/StatusMessage';
import './App.css';
import Snowfall from 'react-snowfall';


const API_KEY = import.meta.env.VITE_API_key;

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    //* setTimeout delays the loading state
    setTimeout(() => {

      if (response.ok) {
        setWeather(data);
        setError("");

      } else {

        setWeather(null);
        setError(data.message);
      }
      setLoading(false);

    }, 2000);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setWeather(null);
      setLoading(true);
      getWeather(city);
    }
  }

  return (


    <div className='main-search' >
      <div className='search-cover'>
        <SearchForm city={city} setCity={setCity} handleSubmit={handleSubmit} />
        <StatusMessage loading={loading} error={error} />
        {weather && <WeatherCard weather={weather} />}
      </div>
      <Snowfall snowflakeCount={700} />
    </div>

  )
}

export default App