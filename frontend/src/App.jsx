import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AddUser from "./pages/AddUser";
import ViewUsers from "./pages/ViewUsers";
import api from "./services/api";

function App() {

    const [users, setUsers] = useState([]);

    async function getUsers() {
        try {
            const response = await api.get("/register");
            setUsers(response.data.users);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <Navbar />
            <AddUser getUsers={getUsers} />
            <ViewUsers users={users} getUsers={getUsers} />
        </>
    );
}

export default App;