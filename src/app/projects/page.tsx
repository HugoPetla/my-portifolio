"use client";
import { AnimatedText } from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Head from "next/head";
import { StaticImageData } from "next/image";
import Link from "next/link";
import ProjectImg from "@/public/images/projects/Project_landpage.png";
import { AnimatedImg } from "@/components/AnimatedImg";

interface CardProject {
  title: string;
  type: "Featured Project" | "Project";
  summary?: string;
  img: StaticImageData;
  link: string;
  github: string;
}

interface ListCardsProps {
  listCards: CardProject[];
}

const ListCardsProject = ({ listCards }: ListCardsProps) => {
  return (
    <div className="grid grid-cols-12 gap-24">
      {listCards.map((card, index) => {
        return (
          <div
            className={`${
              card.type === "Featured Project"
                ? "col-span-12"
                : "col-span-6 md:col-span-6"
            }`}
            key={index}
          >
            <article
              className={`w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl ${
                card.type === "Featured Project" ? "p-12" : "flex-col p-6"
              } dark:border-light dark:bg-dark`}
            >
              <Link
                className={`cursor-pointer overflow-hidden rounded-lg ${
                  card.type === "Featured Project" ? "w-1/2" : "w-full"
                }`}
                href={card.link}
                target="_blank"
              >
                <AnimatedImg img={card.img} title={card.title} />
              </Link>
              <div
                className={`flex flex-col items-start justify-between  ${
                  card.type === "Featured Project"
                    ? "w-1/2 pl-6"
                    : "w-full mt-4"
                }`}
              >
                <span className="text-primary font-medium text-xl dark:text-primaryDark">
                  {card.type}
                </span>
                <Link
                  href={card.link}
                  target="_blank"
                  className="hover:underline underline-offset-2"
                >
                  <h2
                    className={`my-2 w-full text-left font-bold ${
                      card.type === "Featured Project" ? "text-4xl" : "text-3xl"
                    }`}
                  >
                    {card.title}
                  </h2>
                </Link>
                {card.type === "Featured Project" && (
                  <p className="my-2 font-medium text-dark dark:text-light">
                    {card.summary}
                  </p>
                )}
                <div className="mt-2 flex items-center">
                  <Link href={card.github} target="_blank">
                    <GithubIcon
                      className={`${
                        card.type === "Featured Project" ? "w-12" : "w-8"
                      }`}
                    />
                  </Link>
                  <Link
                    className={`ml-4 font-semibold ${
                      card.type === "Featured Project"
                        ? "rounded-lg bg-dark text-light p-2 px-6 text-lg dark:bg-light dark:text-dark"
                        : "underline"
                    }`}
                    href={card.link}
                    target="_blank"
                  >
                    Visit Project
                  </Link>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

const listCards: CardProject[] = [
  {
    title: "Portifolio Project",
    summary:
      "I have developed a project using Next.js 13 and Tailwind CSS. This project showcases my skills and expertise in front-end development. It includes various components and features that demonstrate my proficiency in building responsive and visually appealing web applications. By exploring this project, you can gain a deeper understanding of my coding abilities and attention to detail. Feel free to explore the different sections and functionalities to get a comprehensive view of my skills in action.",
    link: "/",
    type: "Featured Project",
    github: "/",
    img: ProjectImg
  }
];

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
      <main className="w-full mb-16 flex flex-col items-center justify-center pt-16 dark:text-light">
        <AnimatedText
          text="Unleash your imagination, transcend your knowledge."
          className="mb-16"
          key={1}
        />
        <ListCardsProject listCards={listCards} />
      </main>
    </div>
  );
}
