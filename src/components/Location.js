import React, { useState } from "react";
import styled from "@emotion/styled";

const Location = ({ city, country, getWeather }) => {
  const [search, setSearch] = useState(city);

  const [inputMode, setInputMode] = useState(false);

  return (
    <Container>
      {!inputMode ? (
        <City
          onClick={() => {
            setInputMode(true);
          }}
        >
          {city}
        </City>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getWeather(search);
          }}
        >
          <input
            required
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit">Search</button>
          <button
            onClick={() => {
              setInputMode(false);
            }}
          >
            Cancel
          </button>
        </form>
      )}
      <Country>{country}</Country>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const City = styled.h1`
  font-family: "Merriweather sans-serif";
  font-size: 1.6rem;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`;

const Country = styled.h3`
  font-family: "Fira Sans sans-serif";
  font-size: 1.1rem;
`;

export default Location;
