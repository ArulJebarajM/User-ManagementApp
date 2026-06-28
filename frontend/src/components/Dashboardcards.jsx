import { FaUsers } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

function DashboardCards({ users }) {
  return (
    <div className="cards">

      <div className="card">

        <FaUsers className="card-icon" />

        <h2>{users.length}</h2>

        <p>Total Users</p>

      </div>

      <div className="card">

        <MdPersonAdd className="card-icon" />

        <h2>Create</h2>

        <p>Add User</p>

      </div>

      <div className="card">

        <RiEdit2Fill className="card-icon" />

        <h2>Edit</h2>

        <p>Manage Users</p>

      </div>

    </div>
  );
}

export default DashboardCards;