import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condonation from "./Condonation";

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  let heightColor = 0;
  let lowColor = 0;
  let backgroundColor = "";

  if (temp > 12) {
    // This is for hot weather
    heightColor = (1 - (temp - 12) / 28) * 255;
    lowColor = heightColor - 150;
    backgroundColor = `linear-gradient(
      to top,
      rgb(255, ${heightColor}, 0),
      rgb(255, ${Math.abs(lowColor)}, 0)
    )`;
  } else {
    // This is for cold weather
    heightColor = (1 - (temp + 20) / 32) * 255;
    lowColor = heightColor - 150;
    backgroundColor = `linear-gradient(
      to top,
      rgb(0, ${heightColor}, 255),
      rgb(0, ${Math.abs(lowColor)}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${backgroundColor};
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location city={city} country={country} getWeather={getWeather} />
      <Icon condition={condition} />
      <Condonation temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;
