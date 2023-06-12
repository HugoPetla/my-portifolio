"use client";
import { AnimatedText } from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ProjectImg from "@/public/images/projects/crypto-screener-cover-image.jpg";

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: FeaturedProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl">
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github} target="_blank">
            <GithubIcon className="w-10" />
          </Link>
          <Link href={link} target="_blank">
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
          key={1}
        />
        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12">
            <FeaturedProject
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
          <div className="col-span-6 md:col-span-6">Project 1</div>
          <div className="col-span-6 md:col-span-6">Project 2</div>
        </div>
      </main>
    </div>
  );
}
