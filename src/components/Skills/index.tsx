import React from "react";
import { motion } from "framer-motion";

const skillsList = [
  { name: "Web", positionX: "0xw", positionY: "0vw" },
  { name: "CSS", positionX: "-5vw", positionY: "-10vw" },
  { name: "HTML", positionX: "-20vw", positionY: "2vw" },
  { name: "Javascript", positionX: "20vw", positionY: "6vw" },
  { name: "ReactJS", positionX: "0vw", positionY: "7vw" },
  { name: "NextJS", positionX: "10vw", positionY: "4vw" },
  { name: "Web Design", positionX: "32vw", positionY: "-5vw" },
  { name: "Figma", positionX: "0vw", positionY: "-20vw" },
  { name: "Tailwind", positionX: "10vw", positionY: "-15vw" },
  { name: "MUI", positionX: "10vw", positionY: "-5vw" },
  { name: "Jest", positionX: "-25vw", positionY: "15vw" },
];

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <>
      <motion.div
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark dark:shadow-light"
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      >
        {name}
      </motion.div>
    </>
  );
};

export const Skills = () => {
  return (
    <div className="w-full my-32">
      <h2 className="font-bold text-8xl w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        {skillsList.map((skill, index) => (
          <Skill
            name={skill.name}
            x={skill.positionX}
            y={skill.positionY}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
