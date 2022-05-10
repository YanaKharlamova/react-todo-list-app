import React, { useState, useEffect } from "react";
import "./index.scss";
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import { Input, Button, Icon } from 'semantic-ui-react';
// import InputField from './components/TodoList';
// import FilterOptions from './components/TodoList';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterType, setFilterType] = useState('All');
  useEffect(() => {
    const filterTodosHandler = () => {
      switch (filterType) {
        case 'Completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'Uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos)
          break;
      }
    }
    filterTodosHandler();
  }, [todos, filterType])//also needed if we add new todo to show all again

  const handleInput = (e) => {
    setTodo(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        value: todo,
        id: Math.random(),
        completed: false,
      }
    ]);
    setTodo('');
  }


  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        {/* input field: */}
        <form onSubmit={handleSubmit} action="input-field">
          <Input
            placeholder='Search...'
            value={todo}
            onChange={handleInput}
          />
          <Button as='div' labelPosition='right'>
            <Button icon>
              <Icon name='add' />
              Like
            </Button>
          </Button>
          {/* <input type="text" value={todo} onChange={handleInput} />
          <button>Add Todo</button> */}
        </form>
        {/* todo list itself: */}
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
      <Filter
        // todos={todos}
        // setTodos={setTodos}
        // filteredTodos={filteredTodos}
        // setFilteredTodos={setFilteredTodos}
        setFilterType={setFilterType}
      />
    </>
  );
}

export default App;
