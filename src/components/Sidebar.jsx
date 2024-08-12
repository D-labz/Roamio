import { NavLink } from "react-router-dom";

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
    </nav>
  );
};

export default Sidebar;
