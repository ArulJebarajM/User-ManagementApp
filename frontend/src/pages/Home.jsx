import { Link } from "react-router-dom";
import {
  FaUserPlus,
  FaUsers,
  FaDatabase,
  FaShieldAlt,
  FaServer,
  FaReact
} from "react-icons/fa";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            MERN User Management System
          </h1>

          <p>
            A modern Full Stack CRUD application built using
            React, Node.js, Express.js and MongoDB Atlas.
            Create, manage and organize users through a
            professional dashboard.
          </p>

          <div className="hero-buttons">

            <Link
              to="/register"
              className="primary-btn"
            >
              <FaUserPlus />
              Register User
            </Link>

            <Link
              to="/users"
              className="secondary-btn"
            >
              <FaUsers />
              View Users
            </Link>

          </div>

        </div>

        <div className="hero-image">

          <div className="hero-card">

            <h2>
              Dashboard Features
            </h2>

            <ul>

              <li>✔ User Registration</li>

              <li>✔ Update User</li>

              <li>✔ Delete User</li>

              <li>✔ Search Users</li>

              <li>✔ Dashboard Statistics</li>

              <li>✔ Responsive Design</li>

            </ul>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="features">

        <div className="feature-card">

          <FaReact className="feature-icon"/>

          <h2>React Frontend</h2>

          <p>
            Modern reusable components with React Router.
          </p>

        </div>

        <div className="feature-card">

          <FaServer className="feature-icon"/>

          <h2>Express API</h2>

          <p>
            REST API developed using Express.js.
          </p>

        </div>

        <div className="feature-card">

          <FaDatabase className="feature-icon"/>

          <h2>MongoDB Atlas</h2>

          <p>
            Cloud database using Mongoose.
          </p>

        </div>

        <div className="feature-card">

          <FaShieldAlt className="feature-icon"/>

          <h2>Secure</h2>

          <p>
            Authentication & Authorization Middleware.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Home;