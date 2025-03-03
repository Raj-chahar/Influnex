"use client"; // Required for Next.js App Router

import { motion } from "framer-motion";
import Image from "next/image";

const WobbleText = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-transparent">
      <motion.div
        className=""
        animate={{
          x: [-1, 0, -1, 1, 0],
          y: [-1, 0, -1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src="/logo-gcb.png" alt="" width={350} height={350} priority/> 
        {/* // Loads image faster */}
      </motion.div>
    </div>
  );
};

export default WobbleText;
