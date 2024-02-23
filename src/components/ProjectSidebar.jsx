import classes from "./ProjectSidebar.module.scss";
import Button from "./Button.jsx";

export default function ProjectSidebar({
  onStartAddProject,
  project,
  selectProject,
}) {
  return (
    <aside className={classes.sidebar}>
      <h2 className={classes.title}>Twoje projekty</h2>
      <div className={classes["add-project"]}>
        <Button onClick={onStartAddProject}>Dodaj projekt</Button>
      </div>
      <ul>
        {project.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => selectProject(project.id)}
              className={classes.button}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
