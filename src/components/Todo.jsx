import {
  DocumentCheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import "./Todo.css";
import { useState } from "react";

const Todo = ({ id, todo, handleUpdateTodo, handleDeleteTodo }) => {
  const [editing, setEditing] = useState(false);

  const handleCheckboxClick = () =>
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });

  const handleEditClick = () => setEditing(!editing);

  const handleEditTodo = (e) =>
    handleUpdateTodo({
      ...todo,
      label: e.target.value,
    });

  const handleDeleteClick = () => {
    const toDo = document.getElementById(todo.id);
    toDo.classList = "todoItem fade";

    setTimeout(() => {
      handleDeleteTodo(todo.id);
    }, 500);
  };

  return (
    <li className={todo.completed ? "todoItem completed" : "todoItem"} id={id}>
      <label className="todoItem__text">
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleCheckboxClick}
          />
        </div>
        {editing === true ? (
          <input
            type="text"
            value={todo.label}
            onChange={handleEditTodo}
            onKeyDown={(e) => (e.key == "Enter" ? handleEditClick() : null)}
            className="todoItem__input"
          />
        ) : (
          <span className={todo.completed ? "textDone" : "null"}>
            {todo.label}
          </span>
        )}
      </label>
      <div className="todoItem__icons">
        {!editing && (
          <PencilSquareIcon className="icons--sm" onClick={handleEditClick} />
        )}
        {editing && (
          <DocumentCheckIcon className="icons--sm" onClick={handleEditClick} />
        )}
        {!editing && (
          <TrashIcon className="icons--sm" onClick={handleDeleteClick} />
        )}
      </div>
    </li>
  );
};

export default Todo;
