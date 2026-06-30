function TechnologyCard({

  icon,

  title,

  description

}) {

  return (

    <div className="technology-card">

      <div className="technology-icon">

        {icon}

      </div>

      <h3>

        {title}

      </h3>

      <p>

        {description}

      </p>

    </div>

  );

}

export default TechnologyCard;