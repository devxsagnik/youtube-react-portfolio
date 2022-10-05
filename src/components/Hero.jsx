import styles from "../style";
import { heroImg } from "../assets";
import { name } from "../constants";
import { motion } from "framer-motion";
import { homeVariants, homeBannerVariants } from "../animations";

const Hero = () => {

  return (
    <section
      id="home"
      className={`bg-[#111827] flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <motion.div
        variants={homeVariants}
        animate="visible"
        initial="hidden"
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-outfit font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Hi, <br className="sm:block hidden" />{" "}
            <span className="header-gradient">I'm {name}</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-bold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Web Developer.
        </h1>
        <div className={`${styles.paragraph} mt-8`}>
          <div className="buttons">
            <a
              href="#contact"
              className="button button1 font-poppins px-1 pt-[15px] pb-[8px] text-xl text-[#d1d5db] font-medium relative"
              draggable="false"
            >
              Know More{" "}
              <i className="fa-solid fa-arrow-right text-[18px] hero-arrow"></i>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={homeBannerVariants}
        animate="visible"
        initial="hidden"
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={heroImg}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
