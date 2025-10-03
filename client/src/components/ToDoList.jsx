import React, { useEffect, useState } from "react";
import { updateTodoApi } from "../api/todosApi";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = () => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(storedTodos);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setNewTodo("");
  };

  const removeTodo = (index) => {
    try {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); // update storage too
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <form onSubmit={addTodo} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Add a todo
          </label>
          <input
            type="text"
            id="base-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
                     text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>

      {/* Todo List Display */}
      <ul className="mt-6 space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm"
          >
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="ml-4 text-sm text-red-600 hover:text-red-800"
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
