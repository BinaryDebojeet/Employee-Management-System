import React from "react";

const NewTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-purple-500">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 px-3 py-1 text-sm rounded-lg">{data.taskCategory}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskDate}</h2>
      <p className="text-sm mt-2">
      {data.taskDescription}
      </p>
      <div className="mt-4">
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
