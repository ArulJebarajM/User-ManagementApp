function About() {
  return (
    <div className="page">

      <div className="page-header">

        <h1>About This Project</h1>

        <p>
          A full-stack MERN User Management System developed to demonstrate
          CRUD operations, REST API development and MongoDB integration.
        </p>

      </div>

      <div className="about-grid">

        <div className="about-card">

          <h2>Frontend</h2>

          <ul>

            <li>React</li>

            <li>React Router</li>

            <li>Axios</li>

            <li>CSS3</li>

          </ul>

        </div>

        <div className="about-card">

          <h2>Backend</h2>

          <ul>

            <li>Node.js</li>

            <li>Express.js</li>

            <li>MongoDB Atlas</li>

            <li>Mongoose</li>

          </ul>

        </div>

        <div className="about-card">

          <h2>Features</h2>

          <ul>

            <li>Create Users</li>

            <li>Read Users</li>

            <li>Update Users</li>

            <li>Delete Users</li>

            <li>Authentication Middleware</li>

            <li>Authorization Middleware</li>

          </ul>

        </div>

        <div className="about-card">

          <h2>Developer</h2>

          <p>

            <strong>Arul Jebaraj M</strong>

          </p>

          <p>
            MERN Stack Developer
          </p>

          <p>
            Built for learning full-stack web development using the MERN stack.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;