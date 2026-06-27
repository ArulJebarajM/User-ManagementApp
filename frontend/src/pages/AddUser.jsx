import UserForm from "../components/UserForm";

function AddUser({

    getUsers,
    selectedUser,
    setSelectedUser

}) {

    return (

        <div className="container">

            <h1>

                {selectedUser ? "Update User" : "Register User"}

            </h1>

            <UserForm

                getUsers={getUsers}

                selectedUser={selectedUser}

                setSelectedUser={setSelectedUser}

            />

        </div>

    );

}

export default AddUser;