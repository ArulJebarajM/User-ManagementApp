import UserForm from "../components/UserForm";
import { FaUserPlus } from "react-icons/fa";
import "../styles/Form.css";

function Register({
  getUsers,
  selectedUser,
  setSelectedUser,
}) {
  return (
    <div className="register-page">

      <div className="register-header">

        <div className="register-icon">
          <FaUserPlus />
        </div>

        <div>

          <h1>
            {selectedUser
              ? "Update User"
              : "Register New User"}
          </h1>

          <p>
            {selectedUser
              ? "Update the selected user's information."
              : "Fill in the form below to create a new user."}
          </p>

        </div>

      </div>

      <div className="register-card">

        <UserForm
          getUsers={getUsers}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />

      </div>

    </div>
  );
}

export default Register;