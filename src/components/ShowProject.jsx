import classes from "./ShowProject.module.scss";
import Task from "./Task.jsx";
import { useRef } from "react";

export default function ShowProject({
  data,
  deleteProject,
  addTask,
  deleteTask,
}) {
  const taskInput = useRef();
  const errorRef = useRef(false);

  function handleAddTask() {
    const taskValue = taskInput.current.value;
    if (taskValue.trim().length === 0) {
      errorRef.current = true;
      return;
    } else {
      errorRef.current = false;
    }

    addTask(taskValue);
    taskInput.current.value = "";
  }

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
          Usuń projekt
        </button>
      </div>

      <div className={classes.tasks}>
        <h3 className={classes.task}>Zadania</h3>
        <button onClick={handleAddTask} className={classes.add}>
          Dodaj zadanie
        </button>
        {errorRef.current ? (
          <p className={classes.error}>Musisz wprowadzić zadanie</p>
        ) : null}
        <div className={classes["add-task"]}>
          <input type="text" ref={taskInput} />
        </div>
        <ul>
          {data.tasks &&
            data.tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                deleteTask={() => deleteTask(task.id)}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
