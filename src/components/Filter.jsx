import React, { useState } from "react";
import "../Pages/Homepage.css";

export default function Filter({ filter, setFilter }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visual
  };

  const applyFilter = (type) => {
    setFilter(type); // Applying the selected filter
    setShowDropdown(false); // Hiding the dropdown after selecting a filter
  };

  const filterOptions = [
    "All",
    "mountains",
    "desert",
    "beach",
    "urban",
    "rural",
  ]; // filter options

  return (
    <div style={{ position: "relative" }}>
      <button
        className="filter-btn"
        onClick={toggleDropdown}
        style={{ padding: "10px 20px" }}
      >
        Filter
      </button>
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 1,
            borderRadius: "4px",
            overflow: "hidden",
            minWidth: "120px",
          }}
        >
          {filterOptions.map((option) => (
            <button
              className="drop-down"
              key={option}
              onClick={() => applyFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
