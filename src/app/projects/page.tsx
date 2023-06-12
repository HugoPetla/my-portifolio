"use client";
import { AnimatedText } from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ProjectImg from "@/public/images/projects/crypto-screener-cover-image.jpg";

interface CardProjectProps {
  title: string;
  type: "Featured Project" | "Project";
  summary?: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const CardProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: CardProjectProps) => {
  return (
    <article
      className={`w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl ${
        type === "Featured Project" ? "p-12" : "flex-col p-6"
      }`}
    >
      <Link
        className={`cursor-pointer overflow-hidden rounded-lg ${
          type === "Featured Project" ? "w-1/2" : "w-full"
        }`}
        href={link}
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div
        className={`flex flex-col items-start justify-between  ${
          type === "Featured Project" ? "w-1/2 pl-6" : "w-full mt-4"
        }`}
      >
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className={`my-2 w-full text-left font-bold ${
              type === "Featured Project" ? "text-4xl" : "text-3xl"
            }`}
          >
            {title}
          </h2>
        </Link>
        {type === "Featured Project" && (
          <p className="my-2 font-medium text-dark">{summary}</p>
        )}
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank">
            <GithubIcon
              className={`${type === "Featured Project" ? "w-10" : "w-8"}`}
            />
          </Link>
          <Link
            className={`ml-4 font-semibold ${
              type === "Featured Project"
                ? "rounded-lg bg-dark text-light p-2 px-6 text-lg "
                : "underline"
            }`}
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <div className="pt-0 pb-0 px-32">
      <Head>
        <title>Hugo Petla | Projects page</title>
        <meta
          name="description"
          content="here you find some of my main projects"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center pt-16">
        <AnimatedText
          text="Unleash your imagination, transcend your knowledge."
          className="mb-16"
          key={1}
        />
        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12">
            <CardProject
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
              link="/"
              type="Featured Project"
              github="/"
              img={ProjectImg}
            />
          </div>
          <div className="col-span-6 md:col-span-6">
            <CardProject
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
              link="/"
              type="Project"
              github="/"
              img={ProjectImg}
            />
          </div>
          <div className="col-span-6 md:col-span-6">
            <CardProject
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
              link="/"
              type="Project"
              github="/"
              img={ProjectImg}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
