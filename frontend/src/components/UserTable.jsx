import api from "../services/api";
import LoadingSpinner from "./LoadingSpinner";

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

    return (

        <LoadingSpinner
            text="Loading Users..."
            size="large"
        />

    );

}

    if (users.length === 0) {

        return (

            <div className="empty">

                <h2>No Users Found</h2>

                <p>Create your first user.</p>

            </div>

        );

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

                                    className="edit-btn"

                                    onClick={() => setSelectedUser(user)}

                                >

                                    Edit

                                </button>

                                <button

                                    className="delete-btn"

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