import { useEffect, useState } from "react";
import api from "../services/api";

function UserForm({
  getUsers,
 selectedUser,
  setSelectedUser,
}) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (selectedUser) {
      setUser({
        name: selectedUser.name,
        email: selectedUser.email,
        age: selectedUser.age,
      });
    } else {
      setUser({
        name: "",
        email: "",
        age: "",
      });
    }
  }, [selectedUser]);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");
    setError("");

    if (
      !user.name ||
      !user.email ||
      !user.age
    ) {
      setError("Please fill all fields.");
      return;
    }

    setSubmitting(true);

    try {
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

      setUser({
        name: "",
        email: "",
        age: "",
      });

      getUsers();
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Something went wrong."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function cancelUpdate() {
    setSelectedUser(null);

    setUser({
      name: "",
      email: "",
      age: "",
    });

    setError("");
    setMessage("");
  }

  return (
    <form
      className="user-form"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Full Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          value={user.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email Address</label>

        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Age</label>

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={user.age}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-buttons">
        <button
          type="submit"
          className="submit-btn"
          disabled={submitting}
        >
          {submitting
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
            Cancel
          </button>
        )}
      </div>

      {message && (
        <div className="success">
          {message}
        </div>
      )}

      {error && (
        <div className="error">
          {error}
        </div>
      )}
    </form>
  );
}

export default UserForm;