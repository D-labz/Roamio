import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [locations, setLocations] = useState([]);
  const [fetching, setFetching] = useState(true);

  const apiURL = "https://roamio.adaptable.app/locations";

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setLocations(response.data);
      setFetching(true);
    });
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "spaceBetween" }}>
        <h1 style={{ width: "calc(100vw - 180px)", marginLeft: "180px" }}>
          Destinations
        </h1>
        <button style={{ position: "absolute", right: "100px", top: "45px" }}>
          Add New Destination
        </button>
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
        {locations &&
          locations.map((location, i) => {
            return (
              <div key={i} style={{ padding: "5px" }}>
                <Link
                  to={`/details/${location.id}`}
                  state={{ location: location }}
                >
                  <div>
                    <div>
                      <img
                        src={location.img}
                        style={{ height: "250px", width: "350px" }}
                        alt={"image of" + location.name}
                      />
                      <h5>{location.name}</h5>
                      <h6>
                        <em style={{ fontstyle: "italics" }}>
                          {location.type}
                        </em>
                      </h6>
                      <p>{location.budgetStyle}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
