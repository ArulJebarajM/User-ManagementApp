import UserTable from "../components/UserTable";

function Users({
  users,
  loading,
  getUsers,
  setSelectedUser,
}) {
  return (
    <div className="page">

      <div className="page-header">

        <h1>User Management</h1>

        <p>
          View, edit and delete registered users from the system.
        </p>

      </div>

      <UserTable
        users={users}
        loading={loading}
        getUsers={getUsers}
        setSelectedUser={setSelectedUser}
      />

    </div>
  );
}

export default Users;