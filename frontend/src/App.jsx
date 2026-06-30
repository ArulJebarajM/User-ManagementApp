import { Routes, Route } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Users from "./pages/User";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Toast from "./components/Toast";

import api from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Search
  const [search, setSearch] = useState("");

  // Sorting
  const [sortBy, setSortBy] = useState("latest");

  // Global Toast
  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const toastTimer = useRef(null);

  function showToast(type, message) {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    setToast({
      show: true,
      type,
      message,
    });

    toastTimer.current = setTimeout(() => {
      setToast({
        show: false,
        type: "",
        message: "",
      });
    }, 3000);
  }

  async function getUsers() {
    try {
      setLoading(true);

      const response = await api.get("/register");

      setUsers(response.data.users);
    } catch (error) {
      console.error(error);

      showToast(
        "error",
        error.response?.data?.error ||
          "Failed to fetch users."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();

    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  const filteredUsers = useMemo(() => {
    let data = users.filter((user) => {
      return (
        user.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        user.email
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });

    switch (sortBy) {
      case "nameAsc":
        return [...data].sort((a, b) =>
          a.name.localeCompare(b.name)
        );

      case "nameDesc":
        return [...data].sort((a, b) =>
          b.name.localeCompare(a.name)
        );

      case "ageAsc":
        return [...data].sort(
          (a, b) => Number(a.age) - Number(b.age)
        );

      case "ageDesc":
        return [...data].sort(
          (a, b) => Number(b.age) - Number(a.age)
        );

      case "latest":
      default:
        return [...data].reverse();
    }
  }, [users, search, sortBy]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Home */}
          <Route
            index
            element={
              <Home
                users={users}
              />
            }
          />

          {/* Dashboard */}
          <Route
            path="dashboard"
            element={
              <Dashboard
                users={users}
              />
            }
          />

          {/* Register */}
          <Route
            path="register"
            element={
              <Register
                getUsers={getUsers}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                showToast={showToast}
              />
            }
          />

          {/* Users */}
          <Route
            path="users"
            element={
              <Users
                users={filteredUsers}
                loading={loading}
                getUsers={getUsers}
                setSelectedUser={setSelectedUser}
                search={search}
                setSearch={setSearch}
                sortBy={sortBy}
                setSortBy={setSortBy}
                showToast={showToast}
              />
            }
          />

          {/* About */}
          <Route
            path="about"
            element={<About />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Route>
      </Routes>

      {toast.show && (
        <Toast
          type={toast.type}
          message={toast.message}
        />
      )}
    </>
  );
}

export default App;