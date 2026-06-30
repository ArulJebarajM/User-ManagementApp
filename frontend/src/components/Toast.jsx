import { useEffect } from "react";
import "../styles/Toast.css";

function Toast({

  message,
  type = "success",
  show,
  onClose,
  duration = 3000,

}) {

  useEffect(() => {

    if (!show) return;

    const timer = setTimeout(() => {

      onClose();

    }, duration);

    return () => clearTimeout(timer);

  }, [show, duration, onClose]);

  if (!show) return null;

  return (

    <div
      className={`toast ${type}`}
    >

      <span>

        {message}

      </span>

      <button
        className="toast-close"
        onClick={onClose}
      >

        ×

      </button>

    </div>

  );

}

export default Toast;