import DashboardHeader from "../components/DashboardHeader";
import DashboardCards from "../components/DashboardCards";
import RecentUsers from "../components/RecentUsers";

function Dashboard({ users }) {

  return (

    <div className="page">

      <DashboardHeader />

      <DashboardCards users={users} />

      <RecentUsers users={users} />

    </div>

  );
}

export default Dashboard;