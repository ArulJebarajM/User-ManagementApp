import { useEffect, useState } from "react";
import api from "../services/api";

function UserForm({

    getUsers,
    selectedUser,
    setSelectedUser

}) {

    const [user, setUser] = useState({

        name: "",
        email: "",
        age: ""

    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {

        if (selectedUser) {

            setUser({

                name: selectedUser.name,
                email: selectedUser.email,
                age: selectedUser.age

            });

        }

    }, [selectedUser]);

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

        setSubmitting(true);

        try {

            if (selectedUser) {

                const response = await api.put(
                    `/register/${selectedUser._id}`,
                    user
                );

                setMessage(response.data.message);

                setSelectedUser(null);

            }

            else {

                const response = await api.post(
                    "/register",
                    user
                );

                setMessage(response.data.message);

            }

            setUser({

                name: "",
                email: "",
                age: ""

            });

            getUsers();

        }

        catch (err) {

            setError(
                err.response?.data?.error || "Something went wrong"
            );

        }

        finally {

            setSubmitting(false);

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

            <button
                type="submit"
                disabled={submitting}
            >

                {
                    submitting
                        ? selectedUser
                            ? "Updating..."
                            : "Registering..."
                        : selectedUser
                            ? "Update User"
                            : "Register User"
                }

            </button>

            {

                message &&

                <p className="success">

                    {message}

                </p>

            }

            {

                error &&

                <p className="error">

                    {error}

                </p>

            }

        </form>

    );

}

export default UserForm;