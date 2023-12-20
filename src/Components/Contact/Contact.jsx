import "./Contact.css";
import { motion } from "framer-motion";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="ContactText" variants={variants}>
        <motion.h1 variants={variants}>Let Work Together</motion.h1>
        <motion.div className="contactItem" variants={variants}>
          <h2>Mail</h2>
          <span>parvezmosharaf87@gmail.com</span>
        </motion.div>
        <motion.div className="contactItem" variants={variants}>
          <h2>Address</h2>
          <span>Dhaka , Bangladesh</span>
        </motion.div>
        <motion.div className="contactItem" variants={variants}>
          <h2>Phone</h2>
          <span>01316502552</span>
        </motion.div>
      </motion.div>
      <div className="contactForm">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
