import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FavoritesPage({ favoriteArr, deleteItem }) {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    favoriteArr.forEach((location) => {
      // Check if coordinates property exists and is valid
      if (location.coordinates) {
        const [latitudeString, longitudeString] =
          location.coordinates.split(", ");
        const latitude = parseFloat(latitudeString);
        const longitude = parseFloat(longitudeString);

        if (!isNaN(latitude) && !isNaN(longitude)) {
          const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=auto&forecast_days=1`;

          axios
            .get(apiUrl)
            .then((response) => {
              setWeatherData((prevData) => ({
                ...prevData,
                [location.id]: response.data.current.temperature_2m,
              }));
            })
            .catch(() => {
              setWeatherData((prevData) => ({
                ...prevData,
                [location.id]: null,
              }));
            });
        } else {
          setWeatherData((prevData) => ({
            ...prevData,
            [location.id]: null,
          }));
        }
      } else {
        // If coordinates property is missing, set temperature to null
        setWeatherData((prevData) => ({
          ...prevData,
          [location.id]: null,
        }));
      }
    });
  }, [favoriteArr]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "180px",
          marginRight: "100px",
        }}
      >
        <h1 style={{ flex: 1 }}>Your Favorites</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          height: "100vh",
          width: "calc(100vw - 250px)",
          marginLeft: "230px",
        }}
      >
        {favoriteArr.map((location) => (
          <Link to={`/details/${location.id}`}>
            <div key={location.id} style={{ padding: "5px" }}>
              <div>
                <img
                  src={location.img}
                  style={{ height: "250px", width: "350px" }}
                  alt={"image of " + location.name}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h5>{location.name}</h5>
                  <button onClick={() => deleteItem(location.id)}>🗑️</button>
                </div>
                <h6>
                  <em style={{ fontStyle: "italic" }}>{location.type}</em>
                </h6>
                <p>{"$".repeat(location.budgetStyle)}</p>
                <p>
                  {weatherData[location.id] !== undefined &&
                  weatherData[location.id] !== null
                    ? `Current Temperature: ${weatherData[location.id]} °C`
                    : "Temperature unavailable"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
