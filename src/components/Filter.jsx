import React, { useState } from "react";

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
      <button onClick={toggleDropdown} style={{ padding: "10px 20px" }}>
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
              key={option}
              onClick={() => applyFilter(option)}
              style={dropdownButtonStyle}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const dropdownButtonStyle = {
  padding: "10px 15px",
  width: "100%",
  textAlign: "left",
  backgroundColor: "white",
  border: "none",
  cursor: "pointer",
  borderBottom: "1px solid lightgray",
};

// Adding hover style
dropdownButtonStyle[":hover"] = {
  backgroundColor: "#f0f0f0",
};
