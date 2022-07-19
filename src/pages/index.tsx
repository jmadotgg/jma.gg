import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../img/profile.jpg";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  return (
    <div className="bg-slate-800">
      <Head>
        <title>Julius Makel</title>
        <meta name="description" content="Julius Makel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <div className="w-52 h-52 rounded-full overflow-hidden border-indigo-300 border-2 bg-slate-600 ">
          <Image src={profilePic} alt="Profile picture" />
        </div>
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          <span title="Julius Makel" className="text-indigo-300">
            jma
          </span>
        </h1>
        <span>
          <a className="text-white" href="https://github.com/jmadotgg">
            GitHub
          </a>
        </span>
      </main>
    </div>
  );
};

export default Home;
