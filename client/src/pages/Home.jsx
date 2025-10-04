import React, { useState } from "react";

import FetchTodo from "../components/FetchTodo";
import AddTodo from "../components/AddTodo";
function Home() {
  const [reload, setReload] = useState(false);

  const handleTodoAdded = () => {
    // toggle reload flag to trigger FetchTodo refresh
    setReload((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center">
      <AddTodo onTodoAdded={handleTodoAdded} />
      <FetchTodo reload={reload} />
    </div>
  );
}

export default Home;
