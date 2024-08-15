import React from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import Youtube from "../components/Youtube";
import "./Homepage.css";

export default function DetailsPage({
  locations,
  favoriteArr,
  setFavoriteArr,
}) {
  const { locationId } = useParams();
  const navigate = useNavigate();

  const foundLocation = locations.find(
    (location) => location.id === parseInt(locationId)
  );

  const handleAddFavourites = () => {
    let isAlreadyFavorite = false;

    favoriteArr.forEach((favorite) => {
      if (favorite.id === foundLocation.id) {
        isAlreadyFavorite = true;
      }
    });

    if (isAlreadyFavorite) {
      alert("That destination already exists in favorites");
    } else {
      setFavoriteArr([...favoriteArr, foundLocation]);
      navigate("/FavoritesPage");
    }
  };

  const handleNavigate = () => {
    navigate(`/edit/${foundLocation.id}`);
  };

  if (!foundLocation) {
    return <Navigate to="/" />;
  }

  return (
    <div className="details-page">
      <div className="details-with-YouTube">
        <div
          className="details-box"
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
          <p className="details-location-name">{foundLocation.name}</p>
          <img src={foundLocation.img} alt={`image of ${foundLocation.name}`} />
          <div className="details-heading">
            <p>
              <span style={{ fontWeight: "bold" }}>Destination Type: </span>
              <em>{foundLocation.type}</em>
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Budget Type: </span>
              {"$".repeat(foundLocation.budgetStyle)}
            </p>
          </div>
          <p className="details-activities">
            <span style={{ fontWeight: "bold" }}>Things to do:</span>{" "}
            {foundLocation.activities}
          </p>
          <p className="details-description">
            <em>{foundLocation.description}</em>
          </p>
          <p className="details-food">
            <span style={{ fontWeight: "bold" }}>Local Food: </span>
            {foundLocation.food}
          </p>
          <div details-btns>
            <button className="edit-btn" onClick={handleNavigate}>
              Edit
            </button>
            <button className="heart-btn" onClick={handleAddFavourites}>
              ❤️
            </button>
          </div>
        </div>
        <Youtube className="YouTube" destination={foundLocation.name} />
      </div>
    </div>
  );
}
