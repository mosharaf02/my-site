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
          CREATIVITY
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/to__ki__hoica/">
            <img src={ing} alt="" />
          </a>
          <a href="https://www.facebook.com/mosharafpapu.63">
            <img src={fa} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
