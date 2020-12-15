import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

const WeatherEngine = () => {
  const location = "Plovdiv";

  const [city, setCity] = useState(location);
  const [searchCity, setSearchCity] = useState(location);

  const [mainData, setMainData] = useState({
    country: "",
    city: "",
    condition: { name: "", temp: 0 },
  });

  const data = async () => {
    return (
      await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f42ee9792bd54a73ae2105200200111&q=${city}`
      )
    ).json();
  };

  const searchCityFromApi = async (cityForSearch) => {
    return (
      await fetch(
        `http://api.weatherapi.com/v1/search.json?key=f42ee9792bd54a73ae2105200200111&q=${cityForSearch}`
      )
    ).json();
  };

  const fixData = () => {
    data().then((res) => {
      let conditionFromRes = { name: "", temp: 0 };
      if (res.current) {
        if (res.current.condition.code === 1000) {
          conditionFromRes.name = "Clear";
        }
        conditionFromRes.temp = res.current.temp_c;
        setMainData({
          country: res.location.country,
          city: res.location.name,
          condition: conditionFromRes,
        });
      }
    });
    return null;
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchCity.length > 0) {
      searchCityFromApi(searchCity).then((res) => {
        if (res.length >= 1) {
          setCity(res[0].region);
        }
      });
    }
  };

  useEffect(() => {
    fixData();
    // eslint-disable-next-line
  }, [city]);

  return (
    <div
      style={{
        width: "215px",
      }}
    >
      <form>
        <input
          value={searchCity}
          onChange={(res) => {
            setSearchCity(res.target.value);
          }}
        ></input>
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
      {(mainData.city || "").length > 0 ? (
        <WeatherCard mainData={mainData} />
      ) : null}
    </div>
  );
};

export default WeatherEngine;
