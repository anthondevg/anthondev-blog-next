import Image from "next/image";
import Link from "next/link";
import posts from "./db/posts";
import PreviewPost from "./components/PreviewPost";

export default function Home() {
  return (
    <main className="min-h-screen p-12 flex flex-col justify-center items-center  text-center w-full font-mono">
      <Link href="/">
        <h1 className="text-4xl font-bold text-black mb-4 text-white">
          Anthondev.com
        </h1>
      </Link>

      <section className="flex flex-col text-left  w-1/2 justify-between bg-gray-200 p-12 ">
        <ul>
          {posts.map((post) => (
            <PreviewPost data={post} />
          ))}
        </ul>
      </section>
    </main>
  );
}
