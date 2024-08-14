import React from "react";
import {
  Navigate,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function DetailsPage({
  locations,
  favoriteArr,
  setFavoriteArr,
}) {
  const { locationId } = useParams();

  const handleAddFavourites = () => {
    setFavoriteArr([...favoriteArr, foundLocation]);

    navigate("/FavoritesPage");
  };

  const foundLocation = locations.find(
    (location) => location.id === parseInt(locationId)
  );

  if (!foundLocation) {
    return <Navigate to="/" />;
  }
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/edit/${foundLocation.id}`);
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
        src={foundLocation.img}
        style={{
          height: "500px",
          width: "600px",
        }}
        alt={`image of" + ${foundLocation.name}`}
      />
      <p>{foundLocation.name}</p>
      <p>
        <em style={{ fontstyle: "italics" }}>{foundLocation.type}</em>
      </p>
      <p>{foundLocation.budgetStyle}</p>
      <p>{foundLocation.activities}</p>
      <p>{foundLocation.description}</p>
      <p>{foundLocation.food}</p>
      <button onClick={handleNavigate}>Edit</button>
      <button onClick={handleAddFavourites}>:heart:</button>
    </div>
  );
}
