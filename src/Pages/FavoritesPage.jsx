import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FavoritesPage({ favoriteArr, deleteItem }) {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      console.log("favoriteArr:", favoriteArr); // Log the favoriteArr to check its structure

      // Check if favoriteArr is an array and has elements
      if (!Array.isArray(favoriteArr) || favoriteArr.length === 0) return;

      // Filter out locations with missing or invalid coordinates
      const validLocations = favoriteArr.filter(
        (location) => location.coordinates
      );

      console.log("Valid locations:", validLocations); // Log valid locations with coordinates

      if (validLocations.length === 0) {
        console.log(
          "No locations with valid coordinates to fetch weather data."
        );
        setLoading(false);
        return;
      }

      const weatherRequests = validLocations.map(async (location) => {
        const [latitude, longitude] = location.coordinates
          .split(", ")
          .map((coord) => parseFloat(coord));

        console.log(
          `Parsed coordinates for location ${location.id}:`,
          latitude,
          longitude
        ); // Log parsed coordinates

        if (isNaN(latitude) || isNaN(longitude)) {
          console.warn(
            `Location ${location.id} has invalid coordinates: ${location.coordinates}`
          );
          return { id: location.id, temperature: null };
        }

        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=auto&forecast_days=1`;

        try {
          const response = await axios.get(apiUrl);
          console.log(
            `Weather data for location ${location.id}:`,
            response.data
          ); // Log the weather data
          return {
            id: location.id,
            temperature: response.data.current.temperature_2m,
          };
        } catch (error) {
          console.error(
            `Error fetching weather data for location ${location.id}:`,
            error
          );
          return { id: location.id, temperature: null };
        }
      });

      try {
        const weatherResults = await Promise.all(weatherRequests);
        console.log("Weather results:", weatherResults); // Log weather results
        const weatherMap = weatherResults.reduce((acc, { id, temperature }) => {
          acc[id] = temperature;
          return acc;
        }, {});
        setWeatherData(weatherMap);
      } catch (error) {
        console.error("Error processing weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        ></div>
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
          <div key={location.id} style={{ padding: "5px" }}>
            <div>
              <img
                src={location.img}
                style={{ height: "250px", width: "350px" }}
                alt={"image of " + location.name}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5>{location.name}</h5>
                <button onClick={() => deleteItem(location.id)}>🗑️</button>
              </div>
              <h6>
                <em style={{ fontStyle: "italic" }}>{location.type}</em>
              </h6>
              <p>{location.budgetStyle}</p>
              {loading ? (
                <p>Loading temperature data...</p>
              ) : location.coordinates ? (
                <p>
                  Current Temperature:{" "}
                  {weatherData[location.id] !== undefined
                    ? `${weatherData[location.id]} °C`
                    : "Data unavailable"}
                </p>
              ) : (
                <p>No temperature data available</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
