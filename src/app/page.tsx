import Image from "next/image";
import Link from "next/link";
import posts from "./db/posts";
import Post from "./post/page";

export default function Home() {
  return (
    <main className="min-h-screen p-12 flex flex-col justify-center items-center  text-center w-full border border-2 font-mono">
      <Link href="/">
        <h1 className="text-4xl font-bold text-black mb-4 text-white">
          Anthondev.com
        </h1>
      </Link>

      <section className="flex flex-col text-left rounded-xl w-1/2 justify-between bg-white p-12 border border-4 border-gray-600">
        <ul>
          {posts.map((post) => (
            <Post data={post} />
          ))}
        </ul>
      </section>
    </main>
  );
}
