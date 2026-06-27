function Home() {
  return (
    <div className="page">

      <h1>MERN User Management System</h1>

      <p>
        A professional CRUD application developed using the MERN Stack.
      </p>

      <div className="hero">

        <div className="card">

          <h2>Create Users</h2>

          <p>
            Register new users with validation.
          </p>

        </div>

        <div className="card">

          <h2>Manage Users</h2>

          <p>
            Update and delete users easily.
          </p>

        </div>

        <div className="card">

          <h2>REST API</h2>

          <p>
            Built using Express.js and MongoDB Atlas.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Home;