import "./ProgressBar.css";

function ProgressBar({

  title,
  value,
  total,
  color

}) {

  const percentage = total
    ? Math.round((value / total) * 100)
    : 0;

  return (

    <div className="progress-card">

      <div className="progress-header">

        <span>{title}</span>

        <span>{percentage}%</span>

      </div>

      <div className="progress-background">

        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
            background: color
          }}
        ></div>

      </div>

      <p>

        {value} of {total} Users

      </p>

    </div>

  );

}

export default ProgressBar;