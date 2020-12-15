import React from "react";
import styled from "@emotion/styled";

const Condonation = ({ temp, condition }) => {
  const Temp = styled.h1`
    font-family: "Fira sans", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;

  const State = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
    text-align: center;
  `;

  return (
    <div>
      <Temp>{temp} °C</Temp>
      <State>{condition}</State>
    </div>
  );
};

export default Condonation;
