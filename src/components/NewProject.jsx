import Input from "./Input.jsx";
import classes from "./NewProject.module.scss";

export default function NewProject() {
  return (
    <div className={classes["new-project"]}>
      <menu className={classes.menu}>
        <li>
          <button className={classes.cancle}>Anuluj</button>
        </li>
        <li>
          <button className={classes.save}>Zapisz</button>
        </li>
      </menu>
      <div className={classes.inputs}>
        <Input label="Tytuł" />
        <Input label="Opis" textarea />
        <Input label="Termin" />
      </div>
    </div>
  );
}
