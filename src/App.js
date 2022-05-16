import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";
import { Input } from "semantic-ui-react";
import ProjectButton from "./components/Button/ProjectButton";
import "./components/Todo/Todo.scss";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterType, setFilterType] = useState("All");
  useEffect(() => {
    const filterTodosHandler = () => {
      switch (filterType) {
        case "Completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "Uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterTodosHandler();
  }, [todos, filterType]);

  const handleInput = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        value: todo,
        id: Math.random(),
        completed: false,
      },
    ]);
    setTodo("");
  };

  return (
    <>
      <div className="container">
        <header>Todo List</header>
        <div className="container-navigation">
          <form
            className="container-navigation-input"
            onSubmit={handleSubmit}
            action="input-field"
          >
            <Input
              placeholder="Search..."
              value={todo}
              onChange={handleInput}
            />
            <ProjectButton icon={"add"} />
          </form>
          <Filter setFilterType={setFilterType} />
        </div>

        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
    </>
  );
}

export default App;
