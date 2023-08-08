import React from "react";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = () => {
  return (
    <article className="flex items-center gap-4 border-b border-b-gray-400">
      <button className="inline-block h-4 w-4 flex-none rounded-full border-2"></button>
      <p className="grow text-gray-600">Compleate online course on </p>
      <button className="flex-none">
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
