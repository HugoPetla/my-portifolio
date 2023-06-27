"use client";
import Head from "next/head";

import { AnimatedText } from "@/components/AnimatedText";
import PaginationComponentArticle from "@/public/images/articles/pagination_component.jpg";
import FeaturedArticle from "@/components/ArticleCard/FeaturedArticle";
import NormalArticle from "@/components/ArticleCard/NormalArticle";

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
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden min-h-full px-32 dark:text-light">
        <div className="pt-16 pb-32">
          <AnimatedText text="Words Can Change the World" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from
            scratch. Follow this step-by-step guide to integrate Pagination
            component in your ReactJS project."
              link="/"
              time="9 min read"
              img={PaginationComponentArticle}
            />
            <FeaturedArticle
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from
            scratch. Follow this step-by-step guide to integrate Pagination
            component in your ReactJS project."
              link="/"
              time="9 min read"
              img={PaginationComponentArticle}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <NormalArticle
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              link="/"
              date="April 29th, 2023"
              img={PaginationComponentArticle}
            />
            <NormalArticle
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              link="/"
              date="April 29th, 2023"
              img={PaginationComponentArticle}
            />
            <NormalArticle
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              link="/"
              date="April 29th, 2023"
              img={PaginationComponentArticle}
            />
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Articles;
