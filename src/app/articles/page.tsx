"use client";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { AnimatedText } from "@/components/AnimatedText";
import PaginationComponentArticle from "@/public/images/articles/pagination_component.jpg";

interface FeaturedArticleProps {
  img: StaticImageData;
  title: string;
  time: string;
  summary?: string;
  link: string;
}

const FramerImage = motion(Image);

const FeaturedARticle = ({
  img,
  title,
  time,
  summary,
  link,
}: FeaturedArticleProps) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[100%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        className={`w-full inline-block cursor-pointer overflow-hidden rounded-lg`}
        target="_blank"
        href={link}
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const Articles = () => {
  return (
    <div>
      <Head>
        <title>Hugo Petla | Articles page</title>
        <meta
          name="description"
          content="here you find some things that Hugo Petla had written"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden min-h-full px-32">
        <div className="pt-16">
          <AnimatedText text="Words Can Change the World" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedARticle
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from
            scratch. Follow this step-by-step guide to integrate Pagination
            component in your ReactJS project."
              link="/"
              time="9 min read"
              img={PaginationComponentArticle}
            />
            <FeaturedARticle
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from
            scratch. Follow this step-by-step guide to integrate Pagination
            component in your ReactJS project."
              link="/"
              time="9 min read"
              img={PaginationComponentArticle}
            />
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Articles;
