import React from "react";
import { useNavigate } from "react-router-dom";
import lostImg from "../assets/lostpng";

export default function ErrorPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Homepage");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        gap: "50px",
      }}
    >
      <img src={lostImg} alt="Page Not Found" width={600} height="auto" />
      <button onClick={handleNavigate}>Return to Homepage</button>
    </div>
  );
}
