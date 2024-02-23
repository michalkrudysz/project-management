import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true);
    },
    close() {
      setIsOpen(false);
    },
  }));

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <dialog ref={dialog} className={classes.modal} open={isOpen}>
      {children}
      <form method="dialog">
        <button type="button" onClick={() => setIsOpen(false)}>
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
