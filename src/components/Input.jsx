import classes from "./Input.module.scss";

export default function Input({ label, textarea, ...props }) {
  return (
    <p className={classes.wrap}>
      <label>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
