import styles from "../style";
import {
  skillsBar
} from "../constants";
import { aboutImg } from "../assets";
import {
  motion
} from "framer-motion";
import {
  useScroll
} from "../contexts/useScroll";
import {
  aboutVariants,
  aboutBannerVariants,
  skillsVariants,
  skillsBannerVariants,
} from "../animations";

const About = () => {

  const [element,
    controls] = useScroll();

  return (
    <section
      id="about"
      className={`${styles.paddingY} about_wrapper bg-[#111827]`}
      ref={element}
    >
      <div
        className={`grid grid-cols-12 gap-4 xl:px-0 sm:px-16 px-6 justify-between my-8 py-4`}
      >
        <motion.div
          variants={aboutVariants}
          animate={controls}
          className="md:col-span-6 col-span-full"
        >
          <div className="items-center w-full">
            <h2 className="text-[#08fdd8] text-[3.2rem] sm:text-[4.5rem] font-poppins leading-[6rem] font-semibold">
              About Me.
            </h2>
          </div>
          <p className={`${styles.paragraph} text-dimWhite text-[15px] leading-[25px] mt-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            temporibus rerum ad corrupti quia architecto excepturi incidunt unde
            consequatur ab. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Temporibus, eveniet? Quod ipsa ratione optio possimus non est
            pariatur nemo qui.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
            quisquam. Explicabo distinctio adipisci accusamus neque placeat odit
            dicta tempore id, modi magnam? Facilis officia neque voluptatibus
            itaque ipsam quisquam ipsa.
          </p>
        </motion.div>
        <motion.div
          variants={aboutBannerVariants}
          animate={controls}
          className="md:col-span-6 col-span-full relative mlg:top-[-8rem] top-0"
        >
          <img className="h-full w-full" src={aboutImg} alt="about-img" />
        </motion.div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-12 gap-y-[2rem] xl:px-0 sm:px-16 px-6 justify-between mb-0 lg:my-36">
        <motion.div
          variants={skillsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-full md:col-span-6"
        >
          <div className="items-center w-full">
            <h2 className="text-[#08fdd8] text-[3.2rem] sm:text-[4.5rem] font-poppins leading-0 md:leading-[6rem] font-semibold">
              Skills & Experience.
            </h2>
          </div>
          <p
            className={`${styles.paragraph} text-[15px] leading-[25px] mt-3 md:mt-5`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
            rerum, dolor libero id natus rem odit non nulla ratione, deserunt,
            vel at nostrum error? Odio porro velit eligendi cupiditate
            blanditiis ducimus necessitatibus earum molestiae.
          </p>
        </motion.div>
        <motion.div
          variants={skillsBannerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-full md:col-span-6 pb-8 mlg:pb-0 rounded-3xl about-change-div"
        >
          {skillsBar.map((skill, index) => (
            <div className="line relative py-3">
              <div className="info flex justify-between items-center">
                <span className="font-semibold font-syncopate text-[18px] text-[white] uppercase">
                  {skill.name}
                </span>
                <span className="font-semibold font-syncopate text-[18px] text-[white] uppercase">
                  {skill.progress}
                </span>
              </div>
              <div
                className={`bars relative bg-[#595858] h-[5px] w-full my-4 rounded-full`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  className={`absolute h-[5px] bg-[#08fdd8] rounded-full overflow-hidden`}
                  whileInView={{ width: `${skill.progress}` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 4.5,
                    type: "spring",
                    delay: index * 0.2,
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;