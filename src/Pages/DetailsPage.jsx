import React from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import Youtube from "../components/Youtube";

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
        src={foundLocation.img}
        style={{
          height: "500px",
          width: "600px",
        }}
        alt={`image of ${foundLocation.name}`}
      />
      <p>{foundLocation.name}</p>
      <p>
        <em style={{ fontStyle: "italic" }}>
          Destination type: {foundLocation.type}
        </em>
      </p>
      <p>Budget type: {"$".repeat(foundLocation.budgetStyle)}</p>
      <p>Activities: {foundLocation.activities}</p>
      <p>Description: {foundLocation.description}</p>
      <p>Local food: {foundLocation.food}</p>
      <Youtube destination={foundLocation.name} />
      <button onClick={handleNavigate}>Edit</button>
      <button onClick={handleAddFavourites}>❤️</button>
    </div>
  );
}
