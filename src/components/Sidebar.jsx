import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import github from "../assets/github.png";
import Quiz from "../assets/Quiz.png";

const Sidebar = () => {
  return (
    <nav id="sidebar">
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
      <div className="bottom-section">
        <a href="https://github.com/D-labz/Roamio" target="_blank">
          <img src={github} alt="GitHub Logo" />
        </a>
        <NavLink to="/quiz">
          <img src={Quiz} alt="Quiz Logo" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
