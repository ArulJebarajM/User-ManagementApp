import "./StatisticsCard.css";

function StatisticsCard({

  title,
  value,
  icon,
  color,
  subtitle

}) {

  return (

    <div className="statistics-card">

      <div
        className="statistics-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="statistics-content">

        <h3>{title}</h3>

        <h1>{value}</h1>

        <p>{subtitle}</p>

      </div>

    </div>

  );

}

export default StatisticsCard;