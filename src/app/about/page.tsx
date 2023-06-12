"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { AnimatedText } from "@/components/AnimatedText";
import profilePic from "@/public/images/profile/Hugo-Petla-3x4.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Skills } from "@/components/Skills";
import LifeTimeline from "@/components/LifeTimeline";

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{value}</span>;
};

const experience = [
  {
    position: "Frontend",
    company: "Compass Uol",
    companyLink: "https://compass.uol/en/home/",
    address:
      "425 Alameda Barão de Limeira, Campos Elíseos, São Paulo, SP 01202-001, Brazil",
    work: "In my role as a Frontend Developer, I specialize in web development using Nextjs/React. With a strong understanding of both client and server-side development, I am skilled in utilizing various libraries such as Redux, Material-UI (mui), Lodash, and others to deliver high-quality web applications. My expertise in developing responsive and accessible user interfaces, optimizing performance, and implementing best practices for modern web development has enabled me to deliver outstanding solutions for clients across diverse industries. I am committed to staying up-to-date with the latest web technologies, tools, and frameworks and applying them to create compelling and visually engaging web applications that meet user needs and exceed expectations.",
    time: "December 2021 - Present",
  },
];

const education = [
  {
    position: "Bachelor of Computer Engineering ",
    company: "Universidade Estadual de Ponta Grossa - UEPG",
    companyLink: "https://www.uepg.br/",
    address:
      "General Carlos Cavalcanti Avenue, Uvaranas, Ponta Grossa, PR 84030-000, Brazil",
    work: "I hold a Bachelor's degree in Computer Engineering from UEPG, which is ranked among the top 50 universities in Brazil according to the QS Latin America University Rankings and Times Higher Education (THE). During my time at UEPG, I actively participated in various startups and excelled in competitions. Notably, I was awarded the 1st place in the Alltech Innovation Competition Brasil 2016, a competition focused on developing innovative solutions for the agribusiness sector to boost the local economy and foster collaboration between private enterprises and universities. As the founder of Milktech, our startup emerged as the champion of the competition.",
    time: "January 2012 - December 2016",
  },
];

export default function About() {
  return (
    <div className="pt-0 pb-0 px-32">
      <Head>
        <title>Hugo Petla | About page</title>
        <meta
          name="description"
          content="here you find some things about Hugo Petla"
        />
      </Head>
      <main className="flex flex-col items-center text-dark w-full justify-center pb-16">
        <AnimatedText
          text="Crafting purposeful experiences"
          className="py-16"
        />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
            <p className="my-4 font-medium">
              Hi, I&apos;m Hugo, a frontend developer with a passion for design
              and innovative products. With expertise in React and Next.js,
              I&apos;m dedicated to creating engaging and user-friendly web
              experiences. I&apos;m constantly seeking opportunities to
              specialize and enhance my skills in these cutting-edge
              technologies. I bring previous experience working with Vue.js and
              Angular, allowing me to adapt and thrive in different tech
              environments. Let&apos;s collaborate to bring your ideas to life
              with stunning interfaces and seamless functionality.
            </p>
          </div>
          <div className="col-span-3 relative w-80 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
            <Image
              src={profilePic}
              alt="HugoPetlaProfile"
              className="w-80 h-auto rounded-2xl"
            />
          </div>

          <div className="col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={50} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={40} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                projects completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={4} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <LifeTimeline title="Experience" timeline={experience} />
        <LifeTimeline title="Education" timeline={education} />
      </main>
    </div>
  );
}
