import { Routes, Route } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Users from "./pages/User";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import api from "./services/api";

function App() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Search & Sorting
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  async function getUsers() {

    try {

      setLoading(true);

      const response = await api.get("/register");

      setUsers(response.data.users);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    getUsers();

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

    <Routes>

      <Route path="/" element={<Layout />}>

        <Route
          index
          element={<Home users={users} />}
        />

        <Route
          path="dashboard"
          element={
            <Dashboard
              users={users}
            />
          }
        />

        <Route
          path="register"
          element={
            <Register
              getUsers={getUsers}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          }
        />

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
            />
          }
        />

        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Route>

    </Routes>

  );

}

export default App;