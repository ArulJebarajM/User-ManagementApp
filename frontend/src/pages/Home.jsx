import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {

    return (

        <div className="page">

            <section className="hero-section">

                <div className="hero-left">

                    <h1>
                        MERN User Management System
                    </h1>

                    <p>
                        A professional full-stack CRUD application built
                        using React, Node.js, Express.js and MongoDB Atlas.
                        Manage users efficiently with a modern dashboard
                        interface.
                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/register"
                            className="primary-btn"
                        >
                            Register User
                        </Link>

                        <Link
                            to="/users"
                            className="secondary-btn"
                        >
                            View Users
                        </Link>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="info-card">

                        <h2>Project Features</h2>

                        <ul>

                            <li>✔ User Registration</li>

                            <li>✔ View Users</li>

                            <li>✔ Update Users</li>

                            <li>✔ Delete Users</li>

                            <li>✔ MongoDB Atlas</li>

                            <li>✔ REST API</li>

                        </ul>

                    </div>

                </div>

            </section>

            <section className="feature-section">

                <div className="feature-card">

                    <h2>Create</h2>

                    <p>
                        Register new users with validation and
                        secure API requests.
                    </p>

                </div>

                <div className="feature-card">

                    <h2>Manage</h2>

                    <p>
                        Update user information quickly through
                        an intuitive interface.
                    </p>

                </div>

                <div className="feature-card">

                    <h2>Delete</h2>

                    <p>
                        Remove users safely with confirmation
                        before deletion.
                    </p>

                </div>

            </section>

        </div>

    );

}

export default Home;