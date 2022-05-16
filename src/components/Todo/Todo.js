import React from "react";
import cn from "classnames";
import "./Todo.scss";
import ProjectButton from "../Button/ProjectButton";

const Todo = ({ todos, setTodos, filteredTodo }) => {
  const handleDeleteTodo = () => {
    const newArrTodos = todos.filter((el) => el.id !== filteredTodo.id);
    setTodos(newArrTodos);
  };
  const handleCompleteTodo = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === filteredTodo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };
  //   styles:
  const todoStylesClasses = cn([
    "todo",
    { "todo--completed": filteredTodo.completed },
  ]);
  return (
    <>
      <div className={todoStylesClasses} key={filteredTodo.id}>
        <span>{filteredTodo.value}</span>
        <div>
          <ProjectButton
            onClick={handleCompleteTodo}
            icon={"check"}
            handleActionOnClick={handleCompleteTodo}
          >
            Complete todo
          </ProjectButton>
          <ProjectButton handleActionOnClick={handleDeleteTodo} icon={"delete"}>
            Delete todo
          </ProjectButton>
        </div>
      </div>
    </>
  );
};

export default Todo;
