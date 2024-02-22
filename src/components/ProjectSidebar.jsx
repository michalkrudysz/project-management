import classes from "./ProjectSidebar.module.scss";

export default function ProjectSidebar() {
  return (
    <aside className={classes.sidebar}>
      <h2 className={classes.title}>Twoje projekty</h2>
      <div>
        <button>Dodaj projekt</button>
      </div>
      <ul></ul>
    </aside>
  );
}
