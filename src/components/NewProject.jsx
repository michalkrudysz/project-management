import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import classes from "./NewProject.module.scss";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Zamknij">
        <div className={classes.content}>
          <h2 className={classes.title}>Niepoprawne dane</h2>
          <p>Zapomniałeś podać danych.</p>
          <p>Upewnij się, że wszędzie wprowadziłeś poprawne dane.</p>
        </div>
      </Modal>
      <div className={classes["new-project"]}>
        <menu className={classes.menu}>
          <li>
            <button className={classes.cancel} onClick={onCancel}>
              Anuluj
            </button>
          </li>
          <li>
            <button className={classes.save} onClick={handleSave}>
              Zapisz
            </button>
          </li>
        </menu>
        <div className={classes.inputs}>
          <Input type="text" ref={title} label="Tytuł" />
          <Input ref={description} label="Opis" textarea />
          <Input type="date" ref={dueDate} label="Termin" />
        </div>
      </div>
    </>
  );
}
