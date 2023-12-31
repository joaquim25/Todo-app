import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ todos, handleUpdateTodo, handleDeleteTodo }) => {
  return (
    <>
      <ul className="todoItems">
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            todo={todo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
