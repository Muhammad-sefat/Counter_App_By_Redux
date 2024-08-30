import React from "react";
import CountNumber from "./CountNumber";

const Counter = ({ totalCount }) => {
  return (
    <div className="w-[280px] h-[150px] border rounded-md shadow-md pt-5">
      <CountNumber totalCount={totalCount} />
      <div className="flex items-center justify-center gap-4 mt-[16%] text-white">
        <button className="border rounded bg-green-500 p-2">Increment</button>
        <button className="border rounded bg-red-500 p-2">Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
