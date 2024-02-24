import classes from "./Task.module.scss";

export default function Task({ id, description, deleteTask }) {
  return (
    <div className={classes.task}>
      <p className={classes.description}>{description}</p>
      <button onClick={() => deleteTask(id)} className={classes.button}>
        Usuń
      </button>
    </div>
  );
}
