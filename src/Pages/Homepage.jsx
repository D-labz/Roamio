import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../components/Filter";

export default function Homepage() {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("https://roamio.adaptable.app/locations")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setLocations(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleNavigate = () => {
    navigate("/add");
  };
  console.log("Current Filter:", filter);

  const filteredLocations = locations.filter((location) => {
    if (filter === "All") return true; // Showing all locations if "All" is selected
    return location.type === filter; // Filtering locations by type
  });

  console.log("Filtered Locations:", filteredLocations);
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
        <h1 style={{ flex: 1 }}>Destinations</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Filter filter={filter} setFilter={setFilter} />
          <button
            className="add-btn"
            onClick={handleNavigate}
            style={{ padding: "10px 20px", marginLeft: "10px" }}
          >
            Add New Destination
          </button>
        </div>
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
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location, i) => (
            <div key={i} style={{ padding: "5px" }}>
              <Link to={`/details/${location.id}`}>
                <div>
                  <div>
                    <img
                      src={location.img}
                      style={{ height: "250px", width: "350px" }}
                      alt={"image of " + location.name}
                    />
                    <h5>{location.name}</h5>
                    <h6>
                      <em style={{ fontStyle: "italic" }}>{location.type}</em>
                    </h6>
                    <p>{location.budgetStyle}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No locations found for this filter.</p>
        )}
      </div>
    </div>
  );
}
