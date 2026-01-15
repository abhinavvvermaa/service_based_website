import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function PageTransitionLayout({ children }) {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  const [pages, setPages] = useState(() => [
    { key: location.pathname, element: children },
  ]);

  // Disable animation on first load
  useEffect(() => {
    isFirstLoad.current = false;
  }, []);

  // Push new page on route change
  useEffect(() => {
    setPages((prev) => {
      if (prev[prev.length - 1]?.key === location.pathname) return prev;
      return [...prev.slice(-1), { key: location.pathname, element: children }];
    });
  }, [location.pathname, children]);

  return (
    <div className="relative overflow-x-hidden">
      {pages.map((page, index) => {
        const isLast = index === pages.length - 1;
        const shouldAnimate = pages.length > 1;

        return (
          <motion.div
            key={page.key}
            className={`left-0 w-full will-change-transform ${
              isLast ? "relative" : "absolute"
            }`}
            /* NEW PAGE starts slightly outside */
            initial={
              shouldAnimate && isLast
                ? { x: "100%" }
                : false
            }
            /* BOTH pages move together */
            animate={
              shouldAnimate
                ? { x: isLast ? "0%" : "-100%" }
                : { x: "0%" }
            }
            transition={{
              duration: 0.6,
              ease: [0.22, 0.61, 0.36, 1], // very smooth push curve
            }}
            onAnimationComplete={() => {
              if (!isLast) {
                setPages((p) => p.slice(-1));
              }
            }}
          >
            {page.element}
          </motion.div>
        );
      })}
    </div>
  );
}
