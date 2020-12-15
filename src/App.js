import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div
      // className="App"
      style={{
        alignContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* <div
        style={{ backgroundColor: "red", width: "100px", height: "200px" }}
      ></div>
      <div
        style={{ backgroundColor: "green", width: "100px", height: "200px" }}
      ></div> */}
      {/* {/* <WeatherEngine location={"Plovdiv"} /> */}
      <WeatherEngine />
    </div>
  );
}

export default App;
