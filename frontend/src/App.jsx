import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AddUser from "./pages/AddUser";
import ViewUsers from "./pages/ViewUsers";
import api from "./services/api";

function App() {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

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

            <AddUser
                getUsers={getUsers}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
            />

            <ViewUsers
                users={users}
                getUsers={getUsers}
                setSelectedUser={setSelectedUser}
            />

        </>

    );

}

export default App;