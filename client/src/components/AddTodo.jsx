"use client";
import React, { useEffect, useState } from "react";
import { addTodoApi } from "../api/todosApi";

function AddTodo({ onTodoAdded }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [category, setCategory] = useState("Work"); // default category
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!newTitle.trim()) {
      setErrorMessage("Please enter a title for your task.");
      return;
    }

    try {
      // Automatically set status = "To Do"
      await addTodoApi(newTitle, newDescription, category, "To Do");

      setSuccessMessage(`Todo "${newTitle}" added successfully!`);
      setNewTitle("");
      setNewDescription("");
      setCategory("Work");
      onTodoAdded?.();
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to add Todo. Please try again later.");
    }
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
    >
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-800 mb-1">
          Title
        </label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter task title"
          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-800 mb-1">
          Description
        </label>
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Enter task description (optional)"
          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-800 mb-1">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Work</option>
          <option>School</option>
          <option>Personal</option>
          <option>Others</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-800 mb-1">
          Status
        </label>
        <input
          type="text"
          value="To Do"
          disabled
          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-400 bg-gray-100 cursor-not-allowed"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#0f5132] hover:bg-[#0c3f27] text-white font-semibold py-2.5 rounded-lg transition-all"
      >
        + Add Task
      </button>

      {successMessage && (
        <p className="text-green-600 mt-3 text-sm">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-600 mt-3 text-sm">{errorMessage}</p>
      )}
    </form>
  );
}

export default AddTodo;
