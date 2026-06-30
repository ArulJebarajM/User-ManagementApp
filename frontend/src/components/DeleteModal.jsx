import { useEffect } from "react";
import "../styles/DeleteModal.css";

function DeleteModal({
  isOpen,
  title = "Delete User",
  message = "Are you sure you want to delete this user?",
  onConfirm,
  onCancel,
}) {

  useEffect(() => {

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onCancel();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (

    <div
      className="modal-overlay"
      onClick={onCancel}
    >

      <div
        className="delete-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="modal-header">

          <h2>{title}</h2>

        </div>

        <div className="modal-body">

          <p>{message}</p>

        </div>

        <div className="modal-footer">

          <button
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="delete-button"
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );
}

export default DeleteModal;