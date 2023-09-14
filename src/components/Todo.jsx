import {
  DocumentCheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import "./Todo.css";
import { useState } from "react";

const Todo = ({ todo, handleUpdateTodo, handleDeleteTodo }) => {
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

  const handleDeleteClick = (e) => {
    const Todo = e.target.parentElement.parentElement;
    Todo.className = "fade";
    setTimeout(() => {
      handleDeleteTodo(todo.id);
    }, 600);
  };

  return (
    <li className="todoItem">
      <label htmlFor={todo.id} className="todoItem__text">
        <div>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.completed}
            onChange={handleCheckboxClick}
          />
        </div>
        {editing === true ? (
          <input
            type="text"
            value={todo.label}
            onChange={handleEditTodo}
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
