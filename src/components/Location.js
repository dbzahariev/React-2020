import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Location = ({ city, country, getWeather }) => {
  const [search, setSearch] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef("");

  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  }, [inputMode]);

  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(search);
            }}
          >
            <InputField
              ref={inputRef}
              required
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <SearchButton type="submit">Search</SearchButton>
            <ChancelButton
              onClick={() => {
                setInputMode(false);
              }}
            >
              X
            </ChancelButton>
          </FormElement>
        </motion.div>
        <Country>{country}</Country>
      </Container>
    );
  }

  return (
    <Container>
      <City
        onClick={() => {
          setInputMode(true);
        }}
      >
        {city}
      </City>
      <Country>{country}</Country>
    </Container>
  );
};

const FormElement = styled.form`
  display: flex;
  position: relative;
  background: #46618b;
  border-radius: 5px;
`;
const InputField = styled.input`
  padding: 5px;
  width: 80px;
  color: white;
  background: transparent;
  border: none;
  &:focus {
    outline: 0;
  }
`;
const SearchButton = styled.button`
  cursor: pointer;
  padding: 4px;
  background: #394e70;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
`;
const ChancelButton = styled.span`
  font-size: 0.8rem;
  cursor: pointer;
  position: absolute;
  background: #557fc2;
  width: 20px;
  height: 20px;
  top: -10px;
  border-radius: 50%;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
