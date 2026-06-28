import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Users from "./pages/User";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import api from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Home Page */}
        <Route
          index
          element={<Home users={users} />}
        />

        {/* Register Page */}
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

        {/* Users Page */}
        <Route
          path="users"
          element={
            <Users
              users={users}
              loading={loading}
              getUsers={getUsers}
              setSelectedUser={setSelectedUser}
            />
          }
        />

        {/* About Page */}
        <Route
          path="about"
          element={<About />}
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Route>
    </Routes>
  );
}

export default App;