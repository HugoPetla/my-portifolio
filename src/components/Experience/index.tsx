import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "../Icons/LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}) => {
  const liRef = useRef(null);

  return (
    <li
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
      ref={liRef}
    >
      <LiIcon reference={liRef} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Frontend"
            company="Compass Uol"
            companyLink="https://compass.uol/en/home/"
            address="425 Alameda Barão de Limeira, Campos Elíseos, São Paulo, SP 01202-001, Brazil"
            work="In my role as a Frontend Developer, I specialize in web development using Nextjs/React. With a strong understanding of both client and server-side development, I am skilled in utilizing various libraries such as Redux, Material-UI (mui), Lodash, and others to deliver high-quality web applications. My expertise in developing responsive and accessible user interfaces, optimizing performance, and implementing best practices for modern web development has enabled me to deliver outstanding solutions for clients across diverse industries. I am committed to staying up-to-date with the latest web technologies, tools, and frameworks and applying them to create compelling and visually engaging web applications that meet user needs and exceed expectations."
            time="December 2021 - Present"
          />
          <Details
            position="Frontend"
            company="Compass Uol"
            companyLink="https://compass.uol/en/home/"
            address="425 Alameda Barão de Limeira, Campos Elíseos, São Paulo, SP 01202-001, Brazil"
            work="In my role as a Frontend Developer, I specialize in web development using Nextjs/React. With a strong understanding of both client and server-side development, I am skilled in utilizing various libraries such as Redux, Material-UI (mui), Lodash, and others to deliver high-quality web applications. My expertise in developing responsive and accessible user interfaces, optimizing performance, and implementing best practices for modern web development has enabled me to deliver outstanding solutions for clients across diverse industries. I am committed to staying up-to-date with the latest web technologies, tools, and frameworks and applying them to create compelling and visually engaging web applications that meet user needs and exceed expectations."
            time="December 2021 - Present"
          />
        </ul>
      </div>
    </div>
  );
}
