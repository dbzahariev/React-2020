import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

const WeatherEngine = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [weather, setWeather] = useState({
    country: "",
    city: "",
    conditionName: "",
    temp: "",
  });

  const getWeather = async (q) => {
    setLoading(true);

    let cityForSearch = "";

    try {
      let resFromSearchForCity = await (
        await fetch(
          `http://api.weatherapi.com/v1/search.json?key=f42ee9792bd54a73ae2105200200111&q=${q}`
        )
      ).json();

      if (resFromSearchForCity.length >= 1) {
        cityForSearch = resFromSearchForCity[0].region;
      } else {
        setError(true);
      }

      let apiRes = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f42ee9792bd54a73ae2105200200111&q=${cityForSearch}`
      );
      let res = await apiRes.json();
      let condition = res.current.condition;

      setWeather({
        country: res.location.country,
        city: res.location.name,
        conditionName: condition.code === 1000 ? "Clear" : condition.text,
        temp: res.current.temp_c,
      });
    } catch (errorFromRes) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div
      style={{
        width: "215px",
      }}
    >
      {error ? (
        <div style={{ color: "black" }}>
          There hes been error!
          <br />
          <button
            onClick={() => {
              setError(false);
            }}
          >
            {"Reset"}
          </button>
        </div>
      ) : (
        <div>
          {loading ? (
            <div style={{ color: "black" }}>Loading</div>
          ) : (
            <div>
              {(weather.city || "").length > 0 ? (
                <WeatherCard
                  temp={weather.temp}
                  condition={weather.conditionName}
                  city={weather.city}
                  country={weather.country}
                  mainData={weather}
                  getWeather={getWeather}
                />
              ) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherEngine;
