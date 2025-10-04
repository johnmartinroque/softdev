import React, { useEffect, useState } from "react";
import { deleteTodoApi, getTodosApi, updateTodoApi } from "../api/todosApi";
import TodoCard from "./TodoCard";

function FetchTodo({ reload = null }) {
  const [todos, setTodos] = useState([]);

  const fetchTodo = async () => {
    try {
      const todos = await getTodosApi();
      setTodos(todos);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteTodoApi(id);
      fetchTodo();
    } catch (err) {
      console.error(err);
    }
  };

  const updateTodo = async (id, updatedData) => {
    try {
      await updateTodoApi(id, updatedData);
      fetchTodo();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [reload]);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-10 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">My Todo List</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default FetchTodo;
