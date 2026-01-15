import { motion } from "framer-motion";

const variants = {
  initial: { x: "100%" },   // new page enters from right
  animate: { x: "0%" },     // stays
  exit: { x: "-100%" },     // old page exits left
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
