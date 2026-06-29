import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function DashboardHeader() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="dashboard-header">

      <div>

        <h1>Dashboard</h1>

        <p>
          Welcome back! Here is an overview of your User Management System.
        </p>

        <small>{formattedDate}</small>

      </div>

      <div className="dashboard-buttons">

        <Link
          to="/register"
          className="primary-btn"
        >
          + Register User
        </Link>

        <Link
          to="/users"
          className="secondary-btn"
        >
          View Users
        </Link>

      </div>

    </div>
  );
}

export default DashboardHeader;