import React from "react";
import cn from "classnames";

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
  const classNames = cn([
    "task",
    { "task--completed": filteredTodo.completed },
  ]);
  return (
    <>
      <div className={classNames} key={filteredTodo.id}>
        <span>{filteredTodo.value}</span>
        <button onClick={handleDeleteTodo}>Delete todo</button>
        <button onClick={handleCompleteTodo}>Complete todo</button>
      </div>
    </>
  );
};

export default Todo;
