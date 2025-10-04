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
    <div className="text-white">
      <h2 className="text-lg font-bold mb-3">FetchTodo from backend</h2>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
        />
      ))}
    </div>
  );
}

export default FetchTodo;
