import api from "../services/api";

function UserTable({

    users,
    loading,
    getUsers,
    setSelectedUser

}) {

    async function deleteUser(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) return;

        try {

            await api.delete(`/register/${id}`);

            getUsers();

        }

        catch (error) {

            console.log(error);

        }

    }

    if (loading) {

        return <h2>Loading users...</h2>;

    }

    if (users.length === 0) {

        return <h2>No users found.</h2>;

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