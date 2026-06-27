import UserTable from "../components/UserTable";

function ViewUsers({ users, getUsers }) {

    return (
        <div className="container">
            <h1>All Users</h1>

            <UserTable
                users={users}
                getUsers={getUsers}
            />

        </div>
    );

}

export default ViewUsers;