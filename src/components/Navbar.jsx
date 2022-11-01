import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks, name } from "../constants";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import {
  navBarToggle,
  linkVariants,
  ulLinkVariant,
  mobileLinkVariant,
  imageVariants,
} from "../animations";
import MenuToggler from "../contexts/MenuToggler";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useCycle(false, true);

  return (
    <nav
      className={`w-full flex py-6 justify-between items-center navbar mt-5`}
    >
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

      <motion.div
        initial={false}
        animate={toggle ? "open" : "closed"}
        className="sm:hidden flex flex-1 justify-end items-center">
        <MenuToggler toggle={() => setToggle()} />
        <motion.div
          variants={navBarToggle}
          className={`flex p-6 bg-slate-900/40 backdrop-blur-md absolute top-20 left-0 opacity-0 my-2 w-full rounded-xl min-h-[50vh] overflow-hidden`}
        >
          <motion.ul
            variants={ulLinkVariant}
            className="list-none flex flex-col justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
              <motion.li
                variants={mobileLinkVariant}
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[28px] text-white nav-item my-6 shadow-none`}
              >
                <Link
                  className="nav-link"
                  to={`${nav.link}`}
                  onClick={() => setToggle(false)}
                >
                  {nav.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
