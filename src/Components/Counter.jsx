import React from "react";
import CountNumber from "./CountNumber";

const Counter = ({ onDecrement, onIncrement, count }) => {
  return (
    <div className="w-[280px] h-[150px] border rounded-md shadow-md pt-5">
      <CountNumber totalCount={count} />
      <div className="flex items-center justify-center gap-4 mt-[16%] text-white">
        <button
          className="border rounded bg-green-500 p-2"
          onClick={onIncrement}
        >
          Increment
        </button>
        <button className="border rounded bg-red-500 p-2" onClick={onDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
