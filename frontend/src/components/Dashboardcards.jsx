import {
  FaUsers,
  FaUserCheck,
  FaUserClock,
  FaBirthdayCake,
} from "react-icons/fa";

function DashboardCards({ users }) {
  const totalUsers = users.length;

  const adults = users.filter(
    (user) => Number(user.age) >= 18
  ).length;

  const minors = users.filter(
    (user) => Number(user.age) < 18
  ).length;

  const averageAge =
    totalUsers > 0
      ? Math.round(
          users.reduce(
            (total, user) => total + Number(user.age),
            0
          ) / totalUsers
        )
      : 0;

  const cards = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: <FaUsers />,
      color: "#2563eb",
    },
    {
      title: "Adults",
      value: adults,
      icon: <FaUserCheck />,
      color: "#16a34a",
    },
    {
      title: "Minors",
      value: minors,
      icon: <FaUserClock />,
      color: "#f59e0b",
    },
    {
      title: "Average Age",
      value: `${averageAge} yrs`,
      icon: <FaBirthdayCake />,
      color: "#9333ea",
    },
  ];

  return (
    <div className="dashboard-cards">
      {cards.map((card) => (
        <div
          className="dashboard-card"
          key={card.title}
        >
          <div
            className="dashboard-icon"
            style={{
              background: card.color,
            }}
          >
            {card.icon}
          </div>

          <div className="dashboard-content">
            <h2>{card.value}</h2>

            <p>{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;