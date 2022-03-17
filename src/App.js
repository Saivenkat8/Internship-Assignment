import { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import Nothing from './components/nothing';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";



function App() {
  const [todos, setTodos] = useState(null);

  const addTodo = (todo) => {
    if(!todo.title || /^\s*$/.test(todo.title)){
      return;
    }
    const newTodos = [todo, ...todos];
    axios.post('https://jsonplaceholder.typicode.com/todos', todo)
         .then((response) => {
           response.data.id = Math.floor(Math.random() * 10000);
    })
    setTodos(newTodos);
  }

  const onUpdateTodo = (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.id === todo.id);
    const newTodos = [...todos];

    const newTodo = newTodos[todoItemIndex];
    newTodo.completed = !newTodo.completed;
    newTodos[todoItemIndex] = newTodo;
    axios.put("https://jsonplaceholder.typicode.com/todos/" + todoItemIndex, newTodo);
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    axios.delete("https://jsonplaceholder.typicode.com/todos/" + id);
    setTodos(removeArr);
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((result) => {
        setTodos(result.data.slice(0, 50));
      });
  }, []);

  return (
    <div>
      <h5>To-Do List</h5>
      <p>Add a new task in the list</p>
      <TodoForm onSubmit={addTodo}/>
      <p>Added task in to-do list</p>
      {todos ? (
        <TodoList todos={todos} onUpdateTodo={onUpdateTodo} removeTodo={removeTodo} />
      ) : (
        <Nothing />
      )}
    </div>
  );
}

export default App;
