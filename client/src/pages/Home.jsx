import React from "react";
import ToDoList from "../components/ToDoList";
import FetchTodo from "../components/FetchTodo";
function Home() {
  return (
    <div className="flex flex-col items-center">
      <ToDoList />
      <FetchTodo />
    </div>
  );
}

export default Home;
