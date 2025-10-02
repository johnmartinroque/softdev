import React, { useEffect, useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState("");
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    try {
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form class="max-w-sm mx-auto">
        <div class="mb-5"></div>
        <div class="mb-5">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Base input
          </label>
          <input
            type="text"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add{" "}
        </button>
      </form>
    </div>
  );
}

export default ToDoList;
