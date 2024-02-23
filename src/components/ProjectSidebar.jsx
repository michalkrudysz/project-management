import classes from "./ProjectSidebar.module.scss";
import Button from "./Button.jsx";

export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <aside className={classes.sidebar}>
      <h2 className={classes.title}>Twoje projekty</h2>
      <div>
        <Button onClick={onStartAddProject}>Dodaj projekt</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
