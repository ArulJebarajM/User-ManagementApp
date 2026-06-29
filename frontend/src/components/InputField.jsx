import {
  FaUser,
  FaEnvelope,
  FaBirthdayCake
} from "react-icons/fa";

function InputField({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error
}) {

  function getIcon() {

    switch (name) {

      case "name":
        return <FaUser />;

      case "email":
        return <FaEnvelope />;

      case "age":
        return <FaBirthdayCake />;

      default:
        return null;

    }

  }

  return (

    <div className="form-group">

      <label>

        {label}

      </label>

      <div className="input-box">

        <span className="input-icon">

          {getIcon()}

        </span>

        <input

          type={type}

          name={name}

          placeholder={placeholder}

          value={value}

          onChange={onChange}

        />

      </div>

      {

        error &&

        <small className="field-error">

          {error}

        </small>

      }

    </div>

  );

}

export default InputField;