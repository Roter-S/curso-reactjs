import React from "react";

import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="mt-4 rounded-t-lg bg-white [&>article]:p-4">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
