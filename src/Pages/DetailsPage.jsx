import React from "react";
import {
  Navigate,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function DetailsPage(locations) {
  const { locationId } = useParams();
  const locationArray = locations.locations;
  if (!Array.isArray(locationArray)) {
    console.error("locationArray is not an array");
    return <div>Error: Locations data is invalid</div>;
  }
  const Favorites = () => {
    navigate("/FavoritesPage");
  };
  // If your location IDs are numbers, convert locationId to a number
  const location = locationArray.find(
    (location) => location.id === parseInt(locationId)
  );

  if (!location) {
    // If the location is not found, navigate away or show an error message
    return <Navigate to="/" />;
  }
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/edit/${location.id}`);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "20px",
        left: "250px",
        border: "2px solid black",
        padding: "20px",
      }}
    >
      <img
        src={location.img}
        style={{
          height: "500px",
          width: "600px",
        }}
        alt={`image of" + ${location.name}`}
      />
      <p>{location.name}</p>
      <p>
        <em style={{ fontstyle: "italics" }}>{location.type}</em>
      </p>
      <p>{location.budgetStyle}</p>
      <p>{location.activities}</p>
      <p>{location.description}</p>
      <p>{location.food}</p>
      <button onClick={handleNavigate}>Edit</button>
      <button onClick={Favorites}>:heart:</button>
    </div>
  );
}
