"use client";
import React, { useEffect, useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoCard from "../components/TodoCard";
import { getTodosApi, deleteTodoApi, updateTodoApi } from "../api/todosApi";

function Home() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const data = await getTodosApi();
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTodoAdded = () => {
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodoApi(id);
    fetchTodos();
  };

  const handleUpdate = async (id, updatedFields) => {
    await updateTodoApi(id, updatedFields);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="bg-[#faf7f4] p-10 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          My Tasks
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Organize your work and life, finally.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: All Tasks */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              All Tasks
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <TodoCard
                    key={todo.id}
                    todo={todo}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                  />
                ))
              ) : (
                <p className="text-gray-600 italic">No tasks yet.</p>
              )}
            </div>
          </div>

          {/* Right: Add New Task */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Add New Task
            </h2>
            <AddTodo onTodoAdded={handleTodoAdded} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
