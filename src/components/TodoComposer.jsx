import { useState } from "react";
import "./TodoComposer.css";
import { PlusIcon } from "@heroicons/react/24/outline";

function createTodo(label) {
  return {
    id: Math.floor(Math.random() * 10000),
    label,
    completed: false,
  };
}

const TodoComposer = ({ handleAddTodo }) => {
  const [label, setLabel] = useState("");
  const [charsCount, setCharsCount] = useState(0);

  const CHAR_LIMIT = 40;

  const handleUpdateLabel = (e) => {
    setLabel(e.target.value);
    setCharsCount(e.target.value.length);
  };

  const handleAddTodoAction = () => {
    if (charsCount <= CHAR_LIMIT) {
      const todo = createTodo(label);
      handleAddTodo(todo);
      setLabel("");
      setCharsCount(0);
    }
  };

  return (
    <li className="todoComposer">
      <PlusIcon className="icons" onClick={handleAddTodoAction} />
      <input
        className="todoComposer__input"
        placeholder="Add a new todo"
        type="text"
        value={label}
        onChange={handleUpdateLabel}
        onKeyDown={(e) => (e.key == "Enter" ? handleAddTodoAction() : null)}
      />
      <div className="character__counter">
        <p className={charsCount > CHAR_LIMIT ? "character__maxed" : null}>
          {charsCount}/{CHAR_LIMIT}
        </p>
      </div>
    </li>
  );
};

export default TodoComposer;
