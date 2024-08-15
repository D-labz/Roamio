import React from "react";
import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./Edit.css";

export default function EditPage({ locations, updateLocation, setLocations }) {
  const { locationId } = useParams();

  const location = locations.find(
    (location) => location.id === parseInt(locationId)
  );

  const [name, setName] = useState(location.name);
  const [type, setType] = useState(location.type);
  const [img, setImg] = useState(location.img);
  const [activities, setActivities] = useState(location.activities);
  const [description, setDescription] = useState(location.description);
  const [budgetStyle, setBudgetStyle] = useState(location.budgetStyle);
  const [food, setFood] = useState(location.food);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleImgChange = (e) => {
    setImg(e.target.value);
  };
  const handleActivitiesChange = (e) => {
    setActivities(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleBudgetStyleChange = (e) => {
    setBudgetStyle(e.target.value);
  };
  const handleFoodChange = (e) => {
    setFood(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type || !description) {
      alert("Please fill in all fields");
      return;
    }

    const editLocation = {
      id: location.id,
      name,
      type,
      img,
      activities,
      description,
      budgetStyle,
      food,
    };

    axios
      .put(
        `https://roamio.adaptable.app/locations/${location.id}`,
        editLocation
      )
      .then(function (response) {
        console.log(response);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
    setLocations((prev) =>
      prev.map((loc) => (loc.id === location.id ? editLocation : loc))
    );
  };

  return (
    <div>
      <h1 className="page-heading">EDIT THIS LOCATION!</h1>
      <div
        className="edit"
        style={{
          height: "70vh",
          width: "40vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "20px",
          left: "250px",
          border: "2px solid black",
        }}
      >
        <form className="edit-form">
          <div className="edit-row">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="edit-row">
            <label>Type:</label>
            <select value={type} onChange={handleTypeChange}>
              <option value="mountains">Mountains</option>
              <option value="desert">Desert</option>
              <option value="rural">Rural</option>
              <option value="urban">Urban</option>
              <option value="beach">Beach</option>
            </select>
          </div>
          <div className="edit-row">
            <label>Image URL:</label>
            <input
              type="text"
              name="img"
              value={img}
              onChange={handleImgChange}
            />
          </div>
          <div className="edit-row">
            <label>Activities:</label>
            <textarea
              rows="4"
              cols="40"
              type="text"
              name="activities"
              value={activities}
              onChange={handleActivitiesChange}
            />
          </div>
          <div className="edit-row">
            <label>Description:</label>
            <textarea
              rows="4"
              cols="40"
              type="text"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="edit-row">
            <label>Budget Style:</label>
            <select value={budgetStyle} onChange={handleBudgetStyleChange}>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
          </div>
          <div className="edit-row">
            <label>Local Food:</label>
            <input
              type="text"
              name="food"
              value={food}
              onChange={handleFoodChange}
            />
          </div>
          <div>
            <button
              className="edit-submit"
              type="submit"
              onClick={handleSubmit}
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
