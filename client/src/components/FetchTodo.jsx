import React, { useEffect, useState } from "react";
import { getTodos } from "../api/todosApi";

function FetchTodo() {
  const [todos, setTodos] = useState([]);
  const fetchTodo = async () => {
    try {
      const todos = await getTodos();
      setTodos(todos);
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
        <h3 key={val.id}>
          <div className="flex flex-col items-center">
            <div>TItLE: {val.title}</div>
            <div>description: {val.description}</div>
            <div>id: {val.id}</div>
          </div>
        </h3>
      ))}
    </div>
  );
}

export default FetchTodo;
