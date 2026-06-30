import api from "../services/api";
import {
  FaEdit,
  FaTrash,
  FaUserCircle,
} from "react-icons/fa";

function UserTable({
  users,
  loading,
  getUsers,
  setSelectedUser,
}) {
  async function deleteUser(id, name) {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${name}" ?`
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/register/${id}`);

      alert("User deleted successfully.");

      getUsers();
    } catch (error) {
      console.log(error);

      alert("Failed to delete user.");
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>

        <h3>Loading Users...</h3>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="empty">
        <FaUserCircle
          size={70}
          color="#9ca3af"
        />

        <h2>No Users Found</h2>

        <p>
          Register your first user to
          start managing data.
        </p>
      </div>
    );
  }

  return (
    <div className="table-container">

      <table className="user-table">

        <thead>

          <tr>

            <th>#</th>

            <th>Name</th>

            <th>Email</th>

            <th>Age</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user, index) => (

            <tr key={user._id}>

              <td>{index + 1}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.age}</td>

              <td>

                {Number(user.age) >= 18 ? (

                  <span className="status adult">

                    Adult

                  </span>

                ) : (

                  <span className="status minor">

                    Minor

                  </span>

                )}

              </td>

              <td>

                <div className="action-buttons">

                  <button
                    className="edit-btn"
                    onClick={() =>
                      setSelectedUser(user)
                    }
                  >
                    <FaEdit />

                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteUser(
                        user._id,
                        user.name
                      )
                    }
                  >
                    <FaTrash />

                    Delete
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default UserTable;