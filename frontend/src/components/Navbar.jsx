import { NavLink } from "react-router-dom";
import { FaUsersCog } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">

        <FaUsersCog />

        <span>MERN User Management</span>

      </div>

      <ul className="nav-links">

        <li>

          <NavLink
            to="/"
            end
          >
            Home
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/dashboard"
          >
            Dashboard
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/register"
          >
            Register
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/users"
          >
            Users
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/about"
          >
            About
          </NavLink>

        </li>

      </ul>

    </nav>

  );

}

export default Navbar;