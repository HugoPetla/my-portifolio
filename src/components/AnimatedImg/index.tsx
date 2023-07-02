import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const FramerImage = motion(Image);

interface AnimatedImgProps {
  img: StaticImageData;
  title: string;
}

export const AnimatedImg = ({ img, title }: AnimatedImgProps) => {
  return (
    <FramerImage
      src={img}
      alt={title}
      className="w-full h-auto"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      sizes="(max-width: 768px) 100vw, (max-height: 1200px) 50vw, 50vw"
      priority
    />
  );
};
