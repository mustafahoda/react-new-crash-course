import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";
function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("/");
  }

  return (
    <>
      {/* <div className={classes.backdrop} onClick={onClose}> */}
      <div className={classes.backdrop}>
        <dialog open className={classes.modal}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
