"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { AnimatedText } from "@/components/AnimatedText";
import profilePic from "@/public/images/profile/Hugo-Petla-3x4.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Skills } from "@/components/Skills";

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
        <AnimatedText text="Passion Fuels Purpose!" className="py-16" />
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
          <div className="col-span-3 relative w-64 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
            <Image
              src={profilePic}
              alt="HugoPetlaProfile"
              className="w-64 h-auto rounded-2xl"
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
      </main>
    </div>
  );
}
