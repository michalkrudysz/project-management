/* eslint-disable react/prop-types */
import classes from "./Button.module.scss";

export default function Button({ children, ...props }) {
  return (
    <button className={classes.button} {...props}>
      {children}
    </button>
  );
}
