import React from "react";
import { useNavigate } from "react-router-dom";

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
      <button onClick={handleNavigate}>Return to Homepage</button>
    </div>
  );
}
