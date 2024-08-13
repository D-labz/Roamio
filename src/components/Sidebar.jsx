import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import github from "../assets/github.png";

const Sidebar = () => {
  return (
    <nav className="body" id="sidebar">
      <ul className="side-items">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <br />
        <NavLink
          to="/FavoritesPage"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Favorites
        </NavLink>
        <br />
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Us
        </NavLink>
      </ul>
      <div className="logo">
        <a href="https://github.com/D-labz/Roamio" target="_blank">
          <img src={github} alt="Logo" />
        </a>
      </div>
    </nav>
  );
};
export default Sidebar;
