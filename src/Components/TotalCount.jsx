import React from "react";

const TotalCount = ({ number }) => {
  return (
    <div className="h-[80px] w-80 border rounded shadow-md flex items-center p-3">
      <p className="text-2xl font-semibold">Total Count Number : {number} 0</p>
    </div>
  );
};

export default TotalCount;
