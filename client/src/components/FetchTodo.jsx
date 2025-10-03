import React, { useEffect, useState } from "react";
import { deleteTodoApi, getTodosApi } from "../api/todosApi";

function FetchTodo() {
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

  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <div className="text-white">
      FetchTodo from backend
      {todos.map((val) => (
        <div className="mb-2 p-2 bg-gray-200 rounded">
          <div className="bg-gray-500 p-2 rounded">
            <div className="flex flex-col items-start space-y-1">
              <div>Title: {val.title}</div>
              <div>Description: {val.description}</div>
              <div>ID: {val.id}</div>
            </div>
            <button
              className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => deleteTodo(val.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FetchTodo;
