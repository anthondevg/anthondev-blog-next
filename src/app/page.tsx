import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-12 flex flex-col justify-center items-center text-center w-full border border-2 font-mono">
      <Link href="/">
        <h1 className="text-4xl font-bold text-black mb-4">Anthondev.com</h1>
      </Link>

      <section className="flex flex-col text-left w-1/2 justify-between p-12 border border-2 ">
        <Link href={"/page/1"}>
          <article className="rounded-lg mb-4 p-4 border border-2">
            <div className="flex">
              <header>
                <h2 className="font-bold text-4xlxl">What is economy?</h2>
                <p>Published on June 27, 2023</p>
              </header>

              <img
                src="https://www.wallmur.com/media/catalog/product/cache/9b371a0c2f7befd54013ca6ce932047f/e/y/ey000061_crop.jpg"
                alt=""
                className="rounded-xl w-1/2 ml-6"
              />
            </div>

            <p className="text-black">
              Additionally, economics explores the role of entrepreneurship and
              innovation in driving economic growth. Entrepreneurs create new
              businesses, products, and services, which in turn generate
              employment opportunities and contribute to economic development.
              Innovation plays a key role in increasing productivity and
              improving living standards.
            </p>
          </article>
        </Link>
      </section>
    </main>
  );
}
