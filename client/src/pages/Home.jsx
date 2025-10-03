import React from "react";
import ToDoList from "../components/ToDoList";
import FetchTodo from "../components/FetchTodo";
import AddTodo from "../components/AddTodo";
function Home() {
  return (
    <div className="flex flex-col items-center">
      <AddTodo />
      <FetchTodo />
    </div>
  );
}

export default Home;
