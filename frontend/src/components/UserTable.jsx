import api from "../services/api";

function UserTable({

    users,
    getUsers,
    setSelectedUser

}) {

    async function deleteUser(id) {

        try {

            await api.delete(`/register/${id}`);

            getUsers();

        }

        catch (error) {

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

                {

                    users.map((user) => (

                        <tr key={user._id}>

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>{user.age}</td>

                            <td>

                                <button
                                    onClick={() => setSelectedUser(user)}
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deleteUser(user._id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default UserTable;