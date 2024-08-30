import React from "react";

const TotalCount = ({ total }) => {
  return (
    <div className="h-[80px] w-80 border rounded shadow-md flex items-center p-3">
      <p className="text-2xl font-semibold">Total Count Number : {total}</p>
    </div>
  );
};

export default TotalCount;
