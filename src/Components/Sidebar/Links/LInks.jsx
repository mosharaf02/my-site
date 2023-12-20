import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Links = () => {
  const items = [
    { name: "Homepage", link: "home" },
    { name: "Service", link: "services" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Contact", link: "contact" },
    { name: "About", link: "about" },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.link}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
