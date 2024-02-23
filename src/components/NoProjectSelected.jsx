import noProjectImage from "../assets/create-project.png";
import Button from "./Button";
import classes from "./NoProjectSelected.module.scss";

export default function NoProjectSelected() {
  return (
    <div className={classes["no-project-selected"]}>
      <img
        className={classes.image}
        src={noProjectImage}
        alt="Stwórz nowy projekt"
      />
      <h2 className={classes.title}>Żaden projekt nie został zaznaczony</h2>
      <p>Wybierz projekt albo zacznij nowy</p>
      <p className={classes.paragraph}>
        <Button>Stwórz nowy projekt</Button>
      </p>
    </div>
  );
}
