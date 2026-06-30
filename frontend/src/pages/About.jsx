import TechnologyCard from "../components/TechnologyCard";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCode
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiAxios,
  SiVite
} from "react-icons/si";

function About() {
  const technologies = [
    {
      icon: <FaReact />,
      title: "React",
      description:
        "Component-based frontend library used to build responsive user interfaces."
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      description:
        "JavaScript runtime environment powering the backend server."
    },
    {
      icon: <SiExpress />,
      title: "Express.js",
      description:
        "Backend framework used to create RESTful APIs and middleware."
    },
    {
      icon: <SiMongodb />,
      title: "MongoDB Atlas",
      description:
        "Cloud NoSQL database used for storing user information."
    },
    {
      icon: <SiAxios />,
      title: "Axios",
      description:
        "HTTP client used to communicate with the backend API."
    },
    {
      icon: <SiVite />,
      title: "Vite",
      description:
        "Modern frontend build tool providing lightning-fast development."
    }
  ];

  return (
    <div className="page">

      <section className="page-header">

        <h1>About This Project</h1>

        <p>
          This application is a complete MERN Stack CRUD system built
          to demonstrate modern full-stack web development practices.
        </p>

      </section>

      <section className="about-section">

        <div className="about-card">

          <h2>Project Overview</h2>

          <p>
            The MERN User Management System allows administrators to
            create, view, update and delete users through a modern
            dashboard interface.
          </p>

          <p>
            The application communicates with an Express REST API,
            stores data in MongoDB Atlas and consumes the API using
            Axios.
          </p>

        </div>

      </section>

      <section className="about-section">

        <h2 className="section-title">

          Technologies Used

        </h2>

        <div className="technology-grid">

          {technologies.map((technology) => (

            <TechnologyCard
              key={technology.title}
              icon={technology.icon}
              title={technology.title}
              description={technology.description}
            />

          ))}

        </div>

      </section>

      <section className="about-section">

        <h2 className="section-title">

          Project Features

        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <FaCode />

            <h3>CRUD Operations</h3>

            <p>Create, Read, Update and Delete Users.</p>

          </div>

          <div className="feature-card">

            <FaReact />

            <h3>Reusable Components</h3>

            <p>Professional React component architecture.</p>

          </div>

          <div className="feature-card">

            <FaGithub />

            <h3>GitHub Ready</h3>

            <p>Clean folder structure suitable for deployment.</p>

          </div>

        </div>

      </section>

      <section className="about-section">

        <div className="developer-card">

          <h2>Developer</h2>

          <h3>Arul Jebaraj M</h3>

          <p>MERN Stack Developer</p>

          <p>
            Passionate about building scalable full-stack web
            applications using React, Node.js, Express.js and MongoDB.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;