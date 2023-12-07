import "../Navbar/Navbar.css";
import ing from "../../assets/instagram.png";
import fa from "../../assets/facebook.png";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Web Cell Point
        </motion.span>
        <div className="social">
          <a href="">
            <img src={ing} alt="" />
          </a>
          <a href="">
            <img src={fa} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
