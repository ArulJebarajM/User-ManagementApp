import { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaUserCircle,
} from "react-icons/fa";

import api from "../services/api";
import TableHeader from "./TableHeader";
import Pagination from "./Pagination";

function UserTable({
  users,
  loading,
  getUsers,
  setSelectedUser,
}) {
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  async function deleteUser(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/register/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  function handleSort(field) {
    let order = "asc";

    if (field === sortField && sortOrder === "asc") {
      order = "desc";
    }

    setSortField(field);
    setSortOrder(order);
  }

  // -------------------------
  // Sort Users
  // -------------------------

  const sortedUsers = [...users].sort((a, b) => {
    let valueA = a[sortField];
    let valueB = b[sortField];

    if (sortField === "age") {
      valueA = Number(valueA);
      valueB = Number(valueB);
    } else {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    if (valueA < valueB) {
      return sortOrder === "asc" ? -1 : 1;
    }

    if (valueA > valueB) {
      return sortOrder === "asc" ? 1 : -1;
    }

    return 0;
  });

  // -------------------------
  // Pagination
  // -------------------------

  const totalPages = Math.ceil(
    sortedUsers.length / usersPerPage
  );

  const indexOfLast = currentPage * usersPerPage;

  const indexOfFirst = indexOfLast - usersPerPage;

  const currentUsers = sortedUsers.slice(
    indexOfFirst,
    indexOfLast
  );

  // -------------------------
  // Loading
  // -------------------------

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <h3>Loading Users...</h3>
      </div>
    );
  }

  // -------------------------
  // Empty
  // -------------------------

  if (users.length === 0) {
    return (
      <div className="empty">
        <h2>No Users Found</h2>
        <p>Create your first user.</p>
      </div>
    );
  }

  // -------------------------
  // Table
  // -------------------------

  return (
    <>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <TableHeader
                label="Name"
                sortField="name"
                currentSort={sortField}
                sortOrder={sortOrder}
                onSort={handleSort}
              />

              <TableHeader
                label="Email"
                sortField="email"
                currentSort={sortField}
                sortOrder={sortOrder}
                onSort={handleSort}
              />

              <TableHeader
                label="Age"
                sortField="age"
                currentSort={sortField}
                sortOrder={sortOrder}
                onSort={handleSort}
              />

              <th>Status</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="user-info">
                    <FaUserCircle className="avatar" />
                    <span>{user.name}</span>
                  </div>
                </td>

                <td>{user.email}</td>

                <td>{user.age}</td>

                <td>
                  {Number(user.age) >= 18 ? (
                    <span className="badge adult">
                      Adult
                    </span>
                  ) : (
                    <span className="badge minor">
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
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteUser(user._id)
                      }
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default UserTable;