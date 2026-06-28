import UserForm from "../components/UserForm";

function Register({

    getUsers,

    selectedUser,

    setSelectedUser

}) {

    return (

        <div className="page">

            <div className="page-header">

                <h1>

                    {

                        selectedUser

                        ?

                        "Update User"

                        :

                        "Register User"

                    }

                </h1>

                <p>

                    Fill in the details below to

                    {

                        selectedUser

                        ?

                        " update an existing user."

                        :

                        " create a new user."

                    }

                </p>

            </div>

            <div className="form-container">

                <UserForm

                    getUsers={getUsers}

                    selectedUser={selectedUser}

                    setSelectedUser={setSelectedUser}

                />

            </div>

        </div>

    );

}

export default Register;