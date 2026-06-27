import { useEffect, useState } from "react";
import api from "../services/api";

function UserTable() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {

        try {

            const response = await api.get("/register");

            setUsers(response.data.users);

        } catch (error) {

            console.log(error);

        }

    }

    return (

        <table>

            <thead>

                <tr>

                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {users.map((user) => (

                    <tr key={user._id}>

                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>

                        <td>

                            <button>Edit</button>
                            <button>Delete</button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default UserTable;