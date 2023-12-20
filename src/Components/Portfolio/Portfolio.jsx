/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi maiores quasi laudantium itaque ad illo amet architecto? Earum nostrum laborum accusantium architecto modi voluptatem facere ab quam totam vero",
  },
  {
    id: 2,
    title: "Next.Js Blog",
    img: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi maiores quasi laudantium itaque ad illo amet architecto? Earum nostrum laborum accusantium architecto modi voluptatem facere ab quam totam vero",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi maiores quasi laudantium itaque ad illo amet architecto? Earum nostrum laborum accusantium architecto modi voluptatem facere ab quam totam vero",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi maiores quasi laudantium itaque ad illo amet architecto? Earum nostrum laborum accusantium architecto modi voluptatem facere ab quam totam vero",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="Container">
        <div className="Wraper">
          <div className="ImigContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="TextContainers" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Feature Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
