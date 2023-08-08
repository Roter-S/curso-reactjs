import React from "react";

const TodoFilter = () => {
  return (
    <section className="mx-auto mt-4">
      <div className="flex justify-center gap-4 rounded-lg bg-white p-4">
        <button className="text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button className="hover:text-blue-600">Complete</button>
      </div>
    </section>
  );
};

export default TodoFilter;
