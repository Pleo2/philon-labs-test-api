import Image from "next/image";
import { motion } from "framer-motion";

export default function MainImageSprite({
  sprite,
}: {
  sprite: string;
}): JSX.Element {
  return (
    <>
      <div className="border-red-700 w-96 h-96 border-2 rounded-md grid place-content-center mt-4">
        {sprite !== "" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
            exit={{
              opacity: 0,
            }}
          >
            <Image
              src={`data:image/png;base64,${sprite}`}
              alt="pokemon"
              width={400}
              height={400}
            />
          </motion.div>
        ) : (
          <div className="text-center">
            <p className="text-4xl font-mono font-extrabold">Press</p>
            <p className="text-7xl font-mono font-extrabold">start</p>
          </div>
        )}
      </div>
    </>
  );
}
