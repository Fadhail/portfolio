"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.5, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 z-10 pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.5, ease: "easeInOut" },
            }}
            className="flex items-center justify-center h-full"
          >
            <h1 className="text-white text-4xl font-bold">XEROON.</h1>
          </motion.div>
        </motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
