import React, { useEffect, useState } from "react";
import { deleteTodoApi, getTodosApi, updateTodoApi } from "../api/todosApi";
import TodoCard from "./TodoCard";
import Spinner from "./others/Spinner";

function FetchTodo({ reload = null }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchTodo = async () => {
    setLoading(true);
    try {
      const todos = await getTodosApi();
      setTodos(todos);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    setLoading(true);
    try {
      await deleteTodoApi(id);
      fetchTodo();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (id, updatedData) => {
    setLoading(true);
    try {
      await updateTodoApi(id, updatedData);
      fetchTodo();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [reload]);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

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
