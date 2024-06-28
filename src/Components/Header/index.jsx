import todoLogo from "../../assets/todoLogo.svg";
import { CiCirclePlus } from "react-icons/ci";
import styles from "./header.module.css";
import { useState } from "react";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event){
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
        <button>
          Create
          <CiCirclePlus size={20} />
        </button>
      </form>
    </header>
  );
}
