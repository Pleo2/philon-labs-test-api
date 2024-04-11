import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
    hidden: {
      opacity: 0,
      y: -15,
    },
    visible: (index:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: (index + 0.5) * 0.05,
      },
    }),
    exit: {
      opacity: 0,
      x: -400,
      transition: {
        duration: 0.2,
      },
    },
  };

export default function FavoriteCard({
  img,
  deleteFavorites,
  index
}: {
  img: string;
  deleteFavorites: any;
  index: number
}) {
  return (
    <motion.div 
    variants={variants}
    custom={index}
      layoutId={img}
      initial="hidden"
      animate="visible"
      exit="exit"
    className="flex flex-col border-2 border-red-600 rounded-md p-4 items-center">
      <Image
        src={`data:image/png;base64,${img}`}
        alt={img}
        width={250}
        height={250}
      />
        <button className="bg-red-700 w-max px-4 py-2 rounded-md text-white font-mono hover:scale-105 mt-4" onClick={() => deleteFavorites(img)}>delete 🗑️</button>
    </motion.div>
  );
}
