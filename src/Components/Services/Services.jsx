import "./Services.css";
import { motion } from "framer-motion";
import title from "../../assets/people.webp";
const newVariants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  return (
    <motion.div
      className="services"
      variants={newVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainers" variants={newVariants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainers" variants={newVariants}>
        <div className="title">
          <img src={title} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainers" variants={newVariants}>
        <motion.div
          className="boxs"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            eius voluptatem nesciunt voluptatibus rem ipsam velit nobis
            laboriosam quia aperiam. Odio corporis quas doloribus repellendus
            culpa animi a eveniet ea.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="boxs"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            eius voluptatem nesciunt voluptatibus rem ipsam velit nobis
            laboriosam quia aperiam. Odio corporis quas doloribus repellendus
            culpa animi a eveniet ea.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="boxs"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            eius voluptatem nesciunt voluptatibus rem ipsam velit nobis
            laboriosam quia aperiam. Odio corporis quas doloribus repellendus
            culpa animi a eveniet ea.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="boxs"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            eius voluptatem nesciunt voluptatibus rem ipsam velit nobis
            laboriosam quia aperiam. Odio corporis quas doloribus repellendus
            culpa animi a eveniet ea.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
