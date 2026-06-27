import UserTable from "../components/UserTable";

function ViewUsers({

    users,
    getUsers,
    setSelectedUser

}) {

    return (

        <div className="container">

            <h1>All Users</h1>

            <UserTable

                users={users}
                getUsers={getUsers}
                setSelectedUser={setSelectedUser}

            />

        </div>

    );

}

export default ViewUsers;