import { useEffect, useState } from "react";
import api from "../services/api";
import LoadingSpinner from "./LoadingSpinner";
import validateForm from "../utils/FormValidation";
import "../styles/Form.css";
import InputField from "./InputField";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
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

  const [errors, setErrors] = useState({});

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
      resetForm();
    }
  }, [selectedUser]);

  function resetForm() {
    setUser({
      name: "",
      email: "",
      age: "",
    });

    setErrors({});
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setMessage("");
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");
    setError("");

    const validationErrors = validateForm(user);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSubmitting(true);

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

      resetForm();

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

    resetForm();

    setMessage("");
    setError("");
  }

  return (
    <form
      className="user-form"
      onSubmit={handleSubmit}
    >
      {/* Name */}
<div className="form-group">

<label>Full Name</label>

<div className="input-box">

<FaUser className="input-icon" />

<input
type="text"
name="name"
placeholder="Enter Full Name"
value={user.name}
onChange={handleChange}
/>

</div>

</div>

      {/* Email */}

     <div className="form-group">

<label>Email</label>

<div className="input-box">

<MdEmail className="input-icon" />

<input
type="email"
name="email"
placeholder="Enter Email"
value={user.email}
onChange={handleChange}
/>

</div>

</div>

      {/* Age */}

      <div className="form-group">

<label>Age</label>

<div className="input-box">

<FaBirthdayCake className="input-icon" />

<input
type="number"
name="age"
placeholder="Enter Age"
value={user.age}
onChange={handleChange}
/>

</div>

</div>

        

      {/* Buttons */}

      <div className="form-buttons">
        <button
          type="submit"
          className="submit-btn"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <LoadingSpinner />

              <span>
                {selectedUser
                  ? " Updating..."
                  : " Registering..."}
              </span>
            </>
          ) : selectedUser ? (
            "Update User"
          ) : (
            "Register User"
          )}
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