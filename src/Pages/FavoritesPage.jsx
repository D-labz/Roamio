import React from "react";

export default function FavoritesPage({ favoriteArr, deleteItem }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "180px",
          marginRight: "100px",
        }}
      >
        <h1 style={{ flex: 1 }}>Your Favorites</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          height: "100vh",
          width: "calc(100vw - 250px)",
          marginLeft: "230px",
        }}
      >
        {favoriteArr.map((location, i) => (
          <div key={i} style={{ padding: "5px" }}>
            <div>
              <img
                src={location.img}
                style={{ height: "250px", width: "350px" }}
                alt={"image of " + location.name}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5>{location.name}</h5>
                <button onClick={() => deleteItem(location.id)}>🗑️</button>
              </div>
              <h6>
                <em style={{ fontStyle: "italic" }}>{location.type}</em>
              </h6>
              <p>{location.budgetStyle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
