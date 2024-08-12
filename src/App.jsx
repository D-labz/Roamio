import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//import "./App.css";

// Pages
import AddPage from "./Pages/AddPage";
import DetailsPage from "./Pages/DetailsPage";
import EditPage from "./Pages/EditPage";
import ErrorPage from "./Pages/ErrorPage";
import FavoritesPage from "./Pages/FavoritesPage";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/About";

// Components
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
//import DestinationCard from "./components/DestinationCard";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
