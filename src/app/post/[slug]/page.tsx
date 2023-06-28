"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import posts from "../../db/posts";

export default function Post({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === Number(params.slug));
    setPost(post);
  }, []);
  return (
    post && (
      <article className="mb-4 mt-12 p-12 w-1/2 border border-2 bg-gray-200">
        <header>
          <h2 className="font-bold text-4xl">{post.title}</h2>
          <p>Date - {post.date}</p>
          <p>Author - {post.author}</p>
        </header>
        <img src={post.img} alt="" />
        <p className="text-black w-full d-block">{post.content}</p>
      </article>
    )
  );
}
