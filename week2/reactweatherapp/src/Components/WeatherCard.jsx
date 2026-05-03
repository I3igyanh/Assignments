import {Card, Heading, Stack} from '@chakra-ui/react'
import './weathercard.css';

function WeatherCard({ weather }) {
  const { name, sys, main, weather: conditions, wind, visibility } = weather
  const { description, icon } = conditions[0]

  return (
    <Stack className="weather-result" >
{/* city name and icon */}
      <Card.Root className="weather-top">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="weather-icon"
        />
        <Card.Header>
          <Heading size="3xl"  className="weather-city">{name}, {sys.country}</Heading>
          <Card.Body className="weather-condition">{description}</Card.Body>
        </Card.Header>
      </Card.Root>

{/* temperature, humidity, wind, visibility details */}
      <div className="weather-details">

        <Card.Root size="xl" className="detail-item">
          <Card.Header className="label">Feels Like</Card.Header>
          <Card.Body className="value">{Math.round(main.feels_like)}°C</Card.Body>
        </Card.Root>

        <Card.Root size="xl" className="detail-item">
          <Card.Header className="label">Humidity</Card.Header>
          <Card.Body className="value">{main.humidity}%</Card.Body>
        </Card.Root>

        <Card.Root className="detail-item">
          <Card.Header className="label">Wind</Card.Header>
          <Card.Body className="value">{wind.speed} m/s</Card.Body>
        </Card.Root>

        <Card.Root className="detail-item">
          <Card.Header className="label">Visibility</Card.Header>
          <Card.Body className="value">{(visibility / 1000).toFixed(1)} km</Card.Body>
        </Card.Root>

      </div>

    </Stack>
  )
}

export default WeatherCard