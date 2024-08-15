import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

// Pages
import AddPage from "./Pages/AddPage";
import DetailsPage from "./Pages/DetailsPage";
import EditPage from "./Pages/EditPage";
import ErrorPage from "./Pages/ErrorPage";
import FavoritesPage from "./Pages/FavoritesPage";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import Quiz from "./Pages/Quiz";

// Components
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Filter from "./components/Filter";

function App() {
  const [locations, setLocations] = useState([]);
  const [favoriteArr, setFavoriteArr] = useState([]);
  const [fetching, setFetching] = useState(true);

  const apiURL = "https://roamio.adaptable.app/locations";

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setLocations(response.data);
      setFetching(false);
    });
  }, []);

  const deleteItem = (locationId) => {
    setFavoriteArr(
      favoriteArr.filter((location) => location.id !== locationId)
    );
  };

  const createLocation = (newLocation) => {
    setLocations([...locations, newLocation]);
  };
  if (fetching) return <h1>loading</h1>;
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage locations={locations} />} />
        <Route
          path="/details/:locationId"
          element={
            <DetailsPage
              locations={locations}
              favoriteArr={favoriteArr}
              setFavoriteArr={setFavoriteArr}
            />
          }
        />
        <Route path="/About" element={<AboutPage />} />
        <Route
          path="/add"
          element={<AddPage createLocation={createLocation} />}
        />
        <Route
          path="/edit/:locationId"
          element={
            <EditPage locations={locations} setLocations={setLocations} />
          }
        />
        <Route
          path="/FavoritesPage"
          element={
            <FavoritesPage favoriteArr={favoriteArr} deleteItem={deleteItem} />
          }
        />
        <Route path="/quiz" element={<Quiz />} /> {/* Quiz route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
