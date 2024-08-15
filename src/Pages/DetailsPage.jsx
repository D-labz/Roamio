import React from "react";
import {
  Navigate,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./Homepage.css";

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
    <div className="details-page">
      <div>
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
          <img
            src={foundLocation.img}
            alt={`image of" + ${foundLocation.name}`}
          />
          <div className="details-heading">
            <p className="details-location-name">{foundLocation.name}</p>
            <p>
              (<em>{foundLocation.type}</em>)
            </p>
            <p>{foundLocation.budgetStyle}</p>
          </div>
          <p className="details-activities">
            <span style={{ fontWeight: "bold" }}>Things to do:</span>{" "}
            {foundLocation.activities}
          </p>
          <p className="details-description">
            <em>{foundLocation.description}</em>
          </p>
          <p className="details-food">
            <span style={{ fontWeight: "bold" }}>Food: </span>
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
      </div>
      {/* <Youtube destination={foundLocation.name} /> */}
    </div>
  );
}
