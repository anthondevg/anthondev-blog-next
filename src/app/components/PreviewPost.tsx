import Link from "next/link";
import React from "react";
import ShowMore from "./showMore";

export default function PreviewPost({ data }) {
  return (
    <Link href={`/post/${data.id}`}>
      <article className="mb-4 p-8 border border-2 bg-gray-400">
        <header>
          <h2 className="font-bold text-gray-800 text-4xl">{data.title}</h2>
        </header>
        <p className="text-black w-full d-block">
          {data.content.substring(0, 150)}
        </p>
        {data.content.length > 150 ? <ShowMore /> : ""}
      </article>
    </Link>
  );
}
