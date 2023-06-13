import { AnimatedText } from "@/components/AnimatedText";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PaginationComponentArticle from "@/public/images/articles/pagination_component.jpg";

interface FeaturedArticleProps {
  img: StaticImageData;
  title: string;
  time: string;
  summary?: string;
  link: string;
}

const FeaturedARticle = ({
  img,
  title,
  time,
  summary,
  link,
}: FeaturedArticleProps) => {
  return (
    <li>
      <Link
        className={`w-full cursor-pointer overflow-hidden rounded-lg`}
        href={link}
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2">{title}</h2>
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
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <div className="pt-16">
          <AnimatedText text="Words Can Change the World" className="mb-16" />
          <ul className="grid grid-col-2 gap-16">
            <FeaturedARticle
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from
            scratch. Follow this step-by-step guide to integrate Pagination
            component in your ReactJS project."
              link="/"
              time="9 min read"
              img={PaginationComponentArticle}
            />

            <li>Featured article</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Articles;
