import Link from "next/link";
import React from "react";
import ShowMore from "./showMore";

export default function Post({ data }) {
  return (
    <Link href={"/page/1"}>
      <article className="rounded-lg mb-4 p-4 border border-2">
        <header>
          <h2 className="font-bold text-4xl">{data.title}</h2>
          <p>{data.date}</p>
          <p>{data.author}</p>
        </header>
        <p className="text-black w-full d-block">
          {data.content.substring(0, 150)}
        </p>
        {data.content.length > 150 ? <ShowMore /> : ""}
      </article>
    </Link>
  );
}
