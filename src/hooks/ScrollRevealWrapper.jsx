// components/ScrollRevealWrapper.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ScrollRevealWrapper({ children, delay = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollRevealWrapper;
