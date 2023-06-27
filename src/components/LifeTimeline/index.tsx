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
            className="text-primary capitalize dark:text-primaryDark"
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

interface LifeTimelineProps {
  title: string;
  timeline: Array<{
    position: string;
    company: string;
    companyLink: string;
    address: string;
    work: string;
    time: string;
  }>;
}

export default function LifeTimeline({ title, timeline }: LifeTimelineProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mb-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">{title}</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {timeline.map((lifeEvent, key) => {
            return (
              <Details
                position={lifeEvent.position}
                company={lifeEvent.company}
                companyLink={lifeEvent.companyLink}
                address={lifeEvent.address}
                work={lifeEvent.work}
                time={lifeEvent.time}
                key={key}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
