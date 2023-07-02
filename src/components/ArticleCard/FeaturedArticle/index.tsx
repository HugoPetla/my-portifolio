import { AnimatedImg } from "@/components/AnimatedImg";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface FeaturedArticleProps {
  img: StaticImageData;
  title: string;
  time: string;
  summary?: string;
  link: string;
}

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link
}: FeaturedArticleProps) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[100%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        className={`w-full inline-block cursor-pointer overflow-hidden rounded-lg`}
        target="_blank"
        href={link}
      >
        <AnimatedImg img={img} title={title} />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default FeaturedArticle;
