import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div>
      {/* {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))} */}
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
