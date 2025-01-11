import React, { useRef } from "react";

import { motion, useInView } from "motion/react";
export default function InView({ children, direction }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100, // Di chuyển từ trái hoặc phải
    },
    visible: {
      opacity: 1,
      x: 0, // Đưa về vị trí ban đầu
    },
  };
  if (direction) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  } else
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Bắt đầu ở dưới với opacity 0
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation khi scroll vào view
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
}
