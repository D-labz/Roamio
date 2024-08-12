import React from "react";
import {
  Navigate,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function DetailsPage() {
  const pagination = useLocation();
  const { location } = pagination.state;

  /*  const handleEditNavigate = () => {
    navigate(`/${foundLocation.id}/edit`);
  }; */

  //   if (!foundLocation) {
  //     return <Navigate to="/error" />;
  //   }

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
    </div>
  );
}
