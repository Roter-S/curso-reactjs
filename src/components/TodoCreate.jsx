import React from "react";

const TodoCreate = () => {
  return (
    <form
      className="mt-8 flex items-center gap-4 overflow-hidden rounded-lg bg-white py-3 px-3"
      action=""
    >
      <span className="inline-block h-4 w-4 rounded-full border-2"></span>
      <input
        className="w-full text-gray-400 outline-none"
        type="text"
        name=""
        id=""
        placeholder="Creat a new todo..."
      />
    </form>
  );
};

export default TodoCreate;
