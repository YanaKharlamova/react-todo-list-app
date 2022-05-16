import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.scss";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-list">
      {filteredTodos.map((filteredTodo) => (
        <Todo
          key={filteredTodo.id}
          filteredTodo={filteredTodo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
