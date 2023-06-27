import React from "react";

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative font-mono"
      role="navigation"
    >
      <a href="/" className="pl-4">
        Anthondev Blog
      </a>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>

      <ul className="flex">
        <li className="mr-4">
          <a href="/page/1">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
