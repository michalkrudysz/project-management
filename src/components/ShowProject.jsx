import classes from "./ShowProject.module.scss";
import Task from "./Task.jsx";
import { useState, useRef } from "react";

export default function ShowProject({ data, deleteProject }) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);

  const taskInput = useRef();

  function addTask() {
    const taskValue = taskInput.current.value;
    if (taskValue.trim().length === 0) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    setTasks((prevState) => [
      ...prevState,
      {
        description: taskValue,
        id: Math.random(),
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
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
          Usuń
        </button>
      </div>

      <div className={classes.tasks}>
        <h3 className={classes.task}>Zadania</h3>
        <button onClick={addTask} className={classes.add}>
          Dodaj zadanie
        </button>
        {error ? (
          <p className={classes.error}>Musisz wprowadzić zadanie</p>
        ) : null}
        <div className={classes["add-task"]}>
          <input type="text" ref={taskInput} />
        </div>
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
