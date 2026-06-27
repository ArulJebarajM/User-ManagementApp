import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import AddUser from "./pages/AddUser";
import ViewUsers from "./pages/ViewUsers";

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

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    getUsers();

  }, []);

  return (

    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route

          path="/register"

          element={

            <AddUser

              getUsers={getUsers}

              selectedUser={selectedUser}

              setSelectedUser={setSelectedUser}

            />

          }

        />

        <Route

          path="/users"

          element={

            <ViewUsers

              users={users}

              loading={loading}

              getUsers={getUsers}

              setSelectedUser={setSelectedUser}

            />

          }

        />

        <Route

          path="/about"

          element={<About />}

        />

      </Routes>

      <Footer />

    </>

  );

}

export default App;