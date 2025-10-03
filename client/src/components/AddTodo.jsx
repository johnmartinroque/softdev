import React, { useState } from "react";

function AddTodo() {
  const [newTitle, setNewTitle] = useState("");
  const [newDescriptionk, setNewDescription] = useState("");

  // Empty functions for now
  const handleChange = (e) => {
    // setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic to add todo will go here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-blue-300 p-10">
      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Add a Title
        </label>
        <input
          type="text"
          id="base-input"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Add a Description
        </label>
        <input
          type="text"
          id="base-input"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
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
  );
}

export default AddTodo;
