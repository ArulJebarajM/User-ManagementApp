import "../styles/About.css";

function DeveloperCard() {
  return (
    <div className="developer-card">

      <div className="developer-avatar">
        AJ
      </div>

      <div className="developer-info">

        <h2>
          Arul Jebaraj M
        </h2>

        <h4>
          MERN Stack Developer
        </h4>

        <p>
          Passionate about building modern full-stack web
          applications using React, Node.js, Express.js,
          MongoDB and REST APIs.
        </p>

        <div className="developer-skills">

          <span>React</span>

          <span>Node.js</span>

          <span>Express</span>

          <span>MongoDB</span>

          <span>JavaScript</span>

          <span>REST API</span>

          <span>Git</span>

          <span>GitHub</span>

        </div>

      </div>

    </div>
  );
}

export default DeveloperCard;