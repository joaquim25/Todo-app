import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";
import FunctionalityDock from "./FunctionalityDock";
import TodoComposer from "./TodoComposer";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, label: "Click to mark this todo as complete", completed: false },
    { id: 2, label: "Create a new Todo using the box above", completed: false },
    { id: 3, label: "Edit the items [pencil button]", completed: false },
    { id: 4, label: "Delete the items [trash button]", completed: false },
    {
      id: 5,
      label: "On the bottom you'll find a status bar",
      completed: false,
    },
    { id: 6, label: "&& Extra functionalities at the top", completed: false },
  ]);

  const handleDeleteAll = () => {
    setTodos([]);
  };

  const handleDeleteCompleted = () => {
    const newTodos = todos.filter((todo) => todo.completed === false);
    setTodos(newTodos);
  };

  const handleAllCompleted = (status) => {
    const newTodos = todos.map((todo) => ({ ...todo, completed: status }));
    setTodos(newTodos);
  };

  const handleUpdateTodo = (updatedTodo) => {
    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <>
      <Header />
      <TodoComposer handleAddTodo={handleAddTodo} />
      <FunctionalityDock
        todos={todos}
        handleDeleteAll={handleDeleteAll}
        handleDeleteCompleted={handleDeleteCompleted}
        handleAllCompleted={handleAllCompleted}
      />
      <TodoList
        handleAddTodo={handleAddTodo}
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
      <Footer todos={todos} />
    </>
  );
};

export default App;
