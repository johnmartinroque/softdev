import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/todos";

export const getTodosApi = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching todo list", error);
    return [];
  }
};

export const deleteTodoApi = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting todo", error);
    return null;
  }
};

export const updateTodoApi = async (id, title, description) => {
  try {
    const response = await axios.put(
      `${API_URL}/${id}`,

      title,
      description
    );
    return response.data;
  } catch (error) {
    console.error("error updating ", error);
    return null;
  }
};

export const addTodoApi = async (title, description, category, status) => {
  try {
    const response = await axios.post(API_URL, {
      title,
      description,
      category,
      status,
    });
    return response.data;
  } catch (error) {
    console.error("error creating a todo", error);
    return null;
  }
};

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default Todos;
