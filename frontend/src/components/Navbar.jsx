import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="navbar">

      <h2>MERN User Management</h2>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>
          <Link to="/users">Users</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

      </ul>

    </nav>

  );
}

export default Navbar;