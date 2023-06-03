import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }: { name: string; x: number; y: number }) => {
  return (
    <>
      <motion.div
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        {name}
      </motion.div>
    </>
  );
};

export const Skills = ({
  name,
  x,
  y,
}: {
  name: string;
  x: number;
  y: number;
}) => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          {name}
        </motion.div>
      </div>
    </>
  );
};
