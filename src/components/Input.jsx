import classes from "./Input.module.scss";
import { forwardRef } from "react";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  return (
    <p className={classes.wrap}>
      <label>{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} />
      ) : (
        <input ref={ref} {...props} />
      )}
    </p>
  );
});

export default Input;
