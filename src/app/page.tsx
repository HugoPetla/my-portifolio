"use client";

import Image from "next/image";
import profilePic from "@/public/images/profile/dev-pic.png";
import { AnimatedText } from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";

export default function Home() {
  return (
    <div className="pt-0 pb-0 px-32">
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <div className="flex items-center justify-around w-full">
          <div className="w-1/3">
            <Image
              src={profilePic}
              alt="HugoPetlaProfile"
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-height: 1200px) 50vw, 50vw"
              priority
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turn Vision Into Reality with Code and Design."
              className="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled frontend developer, I&apos;m dedicated to turning
              ideas into innovative web applications. Explore my latest projects
              and articles, showcasting my expertise in React.js and web
              development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/Profile_Hugo_Petla.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                download={true}
              >
                Resume <LinkArrow className="w-5 ml-1" />
              </Link>
              <Link
                href="mailto:hugopetla@gmail.com"
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light "
              >
                contact
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
