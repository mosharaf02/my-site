/* eslint-disable react/prop-types */
import { useRef } from "react";
import "../Parallax/Parallax.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "Linear-gradient(180deg, #111132,#0c0c1d)"
            : "Linear-gradient(180deg, #111132,#505065)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "what i do?" : "what i  did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="start"></motion.div>
    </div>
  );
};

export default Parallax;
