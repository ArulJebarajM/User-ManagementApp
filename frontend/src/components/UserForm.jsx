import { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaBirthdayCake,
  FaSave,
  FaTimes
} from "react-icons/fa";
import api from "../services/api";

function UserForm({
  getUsers,
  selectedUser,
  setSelectedUser
}) {

  const initialState = {
    name: "",
    email: "",
    age: ""
  };

  const [user, setUser] = useState(initialState);

  const [errors, setErrors] = useState({});

  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (selectedUser) {

      setUser({
        name: selectedUser.name,
        email: selectedUser.email,
        age: selectedUser.age
      });

    } else {

      setUser(initialState);

    }

  }, [selectedUser]);

  function handleChange(e) {

    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

  }

  function validateForm() {

    let validationErrors = {};

    if (!user.name.trim()) {

      validationErrors.name = "Name is required.";

    } else if (user.name.length < 3) {

      validationErrors.name =
        "Name must contain at least 3 characters.";

    }

    if (!user.email.trim()) {

      validationErrors.email = "Email is required.";

    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)
    ) {

      validationErrors.email = "Invalid email address.";

    }

    if (!user.age) {

      validationErrors.age = "Age is required.";

    } else if (Number(user.age) < 18) {

      validationErrors.age =
        "Age must be at least 18.";

    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;

  }

  async function handleSubmit(e) {

    e.preventDefault();

    setMessage("");

    setErrorMessage("");

    if (!validateForm()) return;

    try {

      setLoading(true);

      let response;

      if (selectedUser) {

        response = await api.put(
          `/register/${selectedUser._id}`,
          user
        );

        setSelectedUser(null);

      } else {

        response = await api.post(
          "/register",
          user
        );

      }

      setMessage(response.data.message);

      setUser(initialState);

      getUsers();

    }

    catch (error) {

      setErrorMessage(
        error.response?.data?.error ||
        "Something went wrong."
      );

    }

    finally {

      setLoading(false);

    }

  }

  function cancelUpdate() {

    setSelectedUser(null);

    setUser(initialState);

    setErrors({});

    setMessage("");

    setErrorMessage("");

  }

  return (

    <form
      className="user-form"
      onSubmit={handleSubmit}
    >

      {/* Name */}

      <div className="form-group">

        <label>

          <FaUser />

          Full Name

        </label>

        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          value={user.name}
          onChange={handleChange}
        />

        {errors.name && (

          <small className="error-text">

            {errors.name}

          </small>

        )}

      </div>

      {/* Email */}

      <div className="form-group">

        <label>

          <FaEnvelope />

          Email Address

        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={user.email}
          onChange={handleChange}
        />

        {errors.email && (

          <small className="error-text">

            {errors.email}

          </small>

        )}

      </div>

      {/* Age */}

      <div className="form-group">

        <label>

          <FaBirthdayCake />

          Age

        </label>

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={user.age}
          onChange={handleChange}
        />

        {errors.age && (

          <small className="error-text">

            {errors.age}

          </small>

        )}

      </div>

      <div className="form-buttons">

        <button
          className="submit-btn"
          type="submit"
          disabled={loading}
        >

          <FaSave />

          {" "}

          {loading
            ? selectedUser
              ? "Updating..."
              : "Registering..."
            : selectedUser
            ? "Update User"
            : "Register User"}

        </button>

        {selectedUser && (

          <button
            type="button"
            className="cancel-btn"
            onClick={cancelUpdate}
          >

            <FaTimes />

            {" "}

            Cancel

          </button>

        )}

      </div>

      {message && (

        <div className="success">

          {message}

        </div>

      )}

      {errorMessage && (

        <div className="error">

          {errorMessage}

        </div>

      )}

    </form>

  );

}

export default UserForm;