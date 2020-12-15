import React from "react";
import styled from "@emotion/styled";

const location = ({ city, country }) => {
  const FontType = "sans-serif";

  const Container = styled.div`
    text-align: center;
  `;

  const City = styled.h1`
    font-family: "Merriweather", ${FontType};
    font-size: 1.6rem;
  `;

  const Country = styled.h3`
    font-family: "Fira Sans", ${FontType};
    font-size: 1.1rem;
  `;

  return (
    <Container>
      <City>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default location;
