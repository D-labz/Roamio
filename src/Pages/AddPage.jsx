import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Add.css";

export default function AddPage({ createLocation }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("mountains");
  const [img, setImg] = useState("");
  const [activities, setActivities] = useState("");
  const [description, setDescription] = useState("");
  const [budgetStyle, setBudgetStyle] = useState(1);
  const [food, setFood] = useState("");
  const [coordinates, setCoordinates] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);
  const handleImgChange = (e) => setImg(e.target.value);
  const handleActivitiesChange = (e) => setActivities(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleBudgetStyleChange = (e) => setBudgetStyle(e.target.value);
  const handleFoodChange = (e) => setFood(e.target.value);
  const handleCoordinatesChange = (e) => setCoordinates(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type || !description || !coordinates) {
      alert("Please fill in all fields");
      return;
    }

    const newLocation = {
      name,
      type,
      img,
      activities,
      description,
      budgetStyle,
      food,
      coordinates,
    };

    axios
      .post("https://roamio.adaptable.app/locations", newLocation)
      .then(function (response) {
        createLocation(response.data);

        setName("");
        setType("");
        setImg("");
        setActivities("");
        setDescription("");
        setBudgetStyle("");
        setFood("");
        setCoordinates("");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="page-heading">Add a New Destination!</h1>
      <div
        className="add"
        style={{
          height: "60vh",
          width: "50vw",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "flex-start",
          position: "absolute",
          top: "15%",
          left: "18%",
          border: "2px solid black",
          padding: "20px",
        }}
      >
        <form className="add-form">
          <div className="add-row">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="add-row">
            <label>Type:</label>
            <select value={type} onChange={handleTypeChange}>
              <option value="mountains">Mountains</option>
              <option value="desert">Desert</option>
              <option value="rural">Rural</option>
              <option value="urban">Urban</option>
              <option value="beach">Beach</option>
            </select>
          </div>
          <div className="add-row">
            <label>Image URL:</label>
            <input
              type="text"
              name="img"
              value={img}
              onChange={handleImgChange}
            />
          </div>
          <div className="add-row">
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
          <div className="add-row">
            <label>Description:</label>
            <textarea
              rows="4"
              cols="40"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="add-row">
            <label>Budget Style:</label>
            <select value={budgetStyle} onChange={handleBudgetStyleChange}>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
          </div>
          <div className="add-row">
            <label>Local Food:</label>
            <input
              type="text"
              name="food"
              value={food}
              onChange={handleFoodChange}
            />
          </div>
          <div className="add-row">
            <label>Coordinates:</label>
            <input
              type="text"
              name="coordinates"
              value={coordinates}
              onChange={handleCoordinatesChange}
            />
          </div>
          <div>
            <button className="add-submit" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
