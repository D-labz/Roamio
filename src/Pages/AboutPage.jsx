import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Homepage");
    console.log("something");

    return (
      <div className="about-text">
        <h1 className="page-heading">About Us</h1>

        <div className="about-p">
          <p>!!!!!!!!!!!!!</p>
        </div>
      </div>
    );
  };
}
