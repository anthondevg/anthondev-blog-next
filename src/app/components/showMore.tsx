"use client";
import React from "react";

export default function ShowMore() {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
    >
      Show More
    </button>
  );
}
