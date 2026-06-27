import UserForm from "../components/UserForm";

function AddUser({ getUsers }) {

    return (
        <div className="container">
            <h1>Register User</h1>
            <UserForm getUsers={getUsers} />
        </div>
    );

}

export default AddUser;