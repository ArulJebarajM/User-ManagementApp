import { useState } from "react";
import api from "../services/api";

function UserForm({ getUsers }) {

    const [user, setUser] = useState({
        name: "",
        email: "",
        age: ""
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (event) => {

        setUser({
            ...user,
            [event.target.name]: event.target.value
        });

    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        setMessage("");
        setError("");

        try {

            const response = await api.post("/register", user);

            setMessage(response.data.message);

            getUsers();

            setUser({
                name: "",
                email: "",
                age: ""
            });

        } catch (err) {

            setError(err.response.data.error);

        }

    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={user.name}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={user.email}
                onChange={handleChange}
            />

            <input
                type="number"
                name="age"
                placeholder="Enter Age"
                value={user.age}
                onChange={handleChange}
            />

            <button type="submit">
                Register
            </button>

            {message && <p className="success">{message}</p>}

            {error && <p className="error">{error}</p>}

        </form>

    );

}

export default UserForm;