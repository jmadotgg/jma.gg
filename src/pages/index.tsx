import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../img/profile.jpg";
const description = "Hi 🖖, I'm Julius. I like to build things.";
const title = "Julius Makel - Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content={description} lang="en" />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <div className="bg-slate-800">
        <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
          <div className="w-52 h-52 rounded-full overflow-hidden border-indigo-300 border-2 bg-slate-600">
            <Image
              src={profilePic}
              alt="Profile picture"
              width="408"
              height="408"
              placeholder="blur"
            />
          </div>
          <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
            <span title={"Julius Makel"} className="text-indigo-300">
              jma
            </span>
          </h1>
          <p className="text-gray-300 md:text-[2rem] my-5">{description}</p>
          <span>
            <a
              className="fill-white text-white flex gap-2"
              href="https://github.com/jmadotgg"
            >
              GitHub
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 16 16"
                width="24"
                data-view-component="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </span>
        </main>
      </div>
    </>
  );
};

export default Home;
