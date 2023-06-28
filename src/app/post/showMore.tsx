"use client";
import React from "react";

export default function ShowMore() {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Show More
    </button>
  );
}
