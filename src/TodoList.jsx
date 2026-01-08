import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Tudolist.css"
export default function TodoList() {
  const [tasks, setTasks] = useState([{ task: "hello", id: uuidv4(), isdone: false }]);
  const [newTodo, setNewTodo] = useState("");
  const addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTasks((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), isdone: false },
    ]);
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTasks((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const convertalluppercase = () => {
    setTasks((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  const uppercaseoneele = (id) => {
    setTasks((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
      )
    );
  };

  const markasdone = (id) => {
    setTasks((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isdone: !todo.isdone } : todo
      )
    );
  };
   const markasall= () => {
    setTasks((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo, isdone: !todo.isdone
            }))
    );
  };

  return (
    <div className="Tododiv">
      <input
        type="text"
        className="inp"
        value={newTodo}
        onChange={updateTodoValue}
        placeholder="Add a new task"
      />
      <button onClick={addNewTask}>Add</button>

      <hr />
      <h1>Todo List</h1>

      <ul>
        {tasks.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isdone ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => uppercaseoneele(todo.id)}>Upper</button>
            <button onClick={() => markasdone(todo.id)}>
              {todo.isdone ? "Undo" : "Mark as done"}
            </button>
          </li>
        ))}
      </ul>
<div className="allbtns">
      <button onClick={convertalluppercase}>Uppercase All</button>
            <button onClick={markasall}>markas All</button>
</div>
    </div>
  );
}
