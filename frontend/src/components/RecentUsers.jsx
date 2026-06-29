function RecentUsers({ users }) {
  const recentUsers = [...users]
    .reverse()
    .slice(0, 5);

  return (
    <div className="recent-users">

      <div className="recent-header">

        <h2>Recent Users</h2>

        <span>
          {recentUsers.length} Records
        </span>

      </div>

      {recentUsers.length === 0 ? (

        <div className="empty">

          <h3>No Users Available</h3>

          <p>
            Register users to view recent activity.
          </p>

        </div>

      ) : (

        <table>

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Age</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {recentUsers.map((user) => (

              <tr key={user._id}>

                <td>

                  <div className="user-info">

                    <div className="avatar">

                      {user.name
                        .charAt(0)
                        .toUpperCase()}

                    </div>

                    {user.name}

                  </div>

                </td>

                <td>{user.email}</td>

                <td>{user.age}</td>

                <td>

                  {Number(user.age) >= 18 ? (

                    <span className="badge adult">

                      Adult

                    </span>

                  ) : (

                    <span className="badge minor">

                      Minor

                    </span>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default RecentUsers;