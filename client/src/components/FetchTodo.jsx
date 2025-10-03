import React, { useEffect, useState } from "react";
import { deleteTodoApi, getTodosApi, updateTodoApi } from "../api/todosApi";

function FetchTodo({ reload = null }) {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
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

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  const confirmEdit = async (id) => {
    try {
      await updateTodoApi(id, {
        title: editTitle,
        description: editDescription,
      });
      fetchTodo();
      cancelEditing();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [reload]);
  return (
    <div className="text-white">
      FetchTodo from backend
      {todos.map((val) => (
        <div key={val.id} className="mb-2 p-2 bg-gray-200 rounded">
          <div className="bg-gray-500 p-2 rounded">
            {editingId === val.id ? (
              <div className="flex flex-col space-y-2">
                <input
                  className="p-1 rounded text-black"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <input
                  className="p-1 rounded text-black"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <div className="flex space-x-2">
                  <button
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => confirmEdit(val.id)}
                  >
                    ✅
                  </button>
                  <button
                    className="px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                    onClick={cancelEditing}
                  >
                    ❌
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-start space-y-1">
                <div>Title: {val.title}</div>
                <div>Description: {val.description}</div>
                <div>ID: {val.id}</div>
                <div className="flex space-x-2 mt-2">
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => startEditing(val)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => deleteTodo(val.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FetchTodo;
