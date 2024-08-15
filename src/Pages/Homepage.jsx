import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../components/Filter";
import "./Homepage.css";
export default function Homepage({ locations }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const handleNavigate = () => {
    navigate("/add");
  };
  const filteredLocations = locations.filter((location) => {
    if (filter === "All") return true;
    return location.type === filter;
  });
  return (
    <div
      style={{ backgroundColor: "beige", width: "98.8vw", height: "4000px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "180px",
          marginRight: "100px",
        }}
      >
        <h1 style={{ flex: 1, margin: "10px" }}>Travel Destinations</h1>
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
          marginLeft: "205px",
        }}
      >
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location, i) => (
            <div key={i}>
              <Link to={`/details/${location.id}`}>
                <div className="card-style">
                  <div>
                    <img
                      src={location.img}
                      style={{ height: "250px", width: "350px" }}
                      alt={"image of " + location.name}
                    />
                    <h3 style={{ paddingLeft: "10px" }}>{location.name}</h3>
                    <h6>
                      <em style={{ paddingLeft: "10px", fontStyle: "italic" }}>
                        Destination type: {location.type}
                      </em>
                    </h6>
                    <p style={{ paddingLeft: "10px" }}>
                      Budget type: {"$".repeat(location.budgetStyle)}
                    </p>
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
