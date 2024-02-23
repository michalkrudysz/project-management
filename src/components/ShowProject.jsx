import classes from "./ShowProject.module.scss";

export default function ShowProject({ data, deleteProject }) {
  console.log(data);
  return (
    <div>
      <div className={classes["show-project"]}>
        <h2 className={classes.header}>{data.title}</h2>
        <p className={classes.description}>
          Opis: <br></br>
          {data.description}
        </p>
        <p className={classes.term}>Termin: {data.dueDate}</p>
        <button
          onClick={() => deleteProject(data.id)}
          className={classes.button}
        >
          Usuń
        </button>
      </div>

      <div className={classes.tasks}>
        <h3>Zadania</h3>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
    </div>
  );
}
