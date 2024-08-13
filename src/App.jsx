import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
//import "./App.css";

// Pages
import AddPage from "./Pages/AddPage";
import DetailsPage from "./Pages/DetailsPage";
import EditPage from "./Pages/EditPage";
import ErrorPage from "./Pages/ErrorPage";
import FavoritesPage from "./Pages/FavoritesPage";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";

// Components
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
//import DestinationCard from "./components/DestinationCard";
import Filter from "./components/Filter";

function App() {
  const [locations, setLocations] = useState([]);
  const [fetching, setFetching] = useState(true);

  const apiURL = "https://roamio.adaptable.app/locations";

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setLocations(response.data);
      setFetching(true);
    });
  }, []);


  const createLocation = (newLocation) => {
    console.log(newLocation);
    console.log(locations);

    setLocations([...locations, newLocation]);
  };

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage locations={locations} />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/add"
          element={<AddPage createLocation={createLocation} />}
        />
        <Route path="/favourites" element={<FavoritesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
