import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks, name } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import { linkVariants, imageVariants } from "../animations";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navBarToggle = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0.5, x: "-100%" },
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar mt-5">
      <motion.h5
        variants={imageVariants}
        animate="visible"
        initial="hidden"
        className="h-auto w-auto text-[28px] font-syncopate uppercase font-semibold leading-7 text-white"
      >
        {name}
        <span className="text-red-500 ml-[2px]">.</span>
      </motion.h5>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
            custom={index}
            animate="visible"
            variants={linkVariants}
            initial="hidden"
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[18px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white nav-item`}
          >
            <Link className="nav-link" to={`${nav.link}`}>
              {nav.title}
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <motion.div
          animate={toggle ? "open" : "closed"}
          variants={navBarToggle}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.2 }}
          className={`flex p-6 bg-black-gradient absolute top-20 left-0 my-2 w-full rounded-xl sidebar min-h-[50vh]`}
        >
          <ul className="list-none flex flex-col justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
              <motion.li
                custom={index}
                animate="visible"
                variants={linkVariants}
                initial="hidden"
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[28px] text-white nav-item my-6`}
              >
                <Link className="nav-link" to={`${nav.link}`}>
                  {nav.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
