import {
  useEffect,
  useRef
} from "react";
import styles from "../style";
import {
  skills,
  skillsBar
} from "../constants";
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
  skillsBanner1Variants,
  skillsBanner2Variants,
  perSkillsVariants
} from "../animations";

const About = () => {
  useEffect(() => {
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "#08FDD8",
      textFont: "Poppins, sans-serif",
      outlineThickness: 0.5,
      outlineColour: "#FE0853",
      maxSpeed: 0.08,
      freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      freezeDecel: true,
      fadeIn: 2000,
      initial: [0.3, -0.1],
      depth: 1.1,
    };
    try {
      TagCanvas.Start("tagcanvas", "taglist", tagCanvasOptions);
    } catch (e) {
      console.log("Canvas error.");
      console.log(e);
      TagCanvas.Stop();
    }
  }, []);

  const [element,
    controls] = useScroll();

  return (
    <section
      id="about"
      className={`${styles.paddingY} about_wrapper bg-[#111827]`}
      ref={element}
      >
      <div
        className={`grid grid-cols-12 gap-4 xl:px-0 sm:px-16 px-6 justify-between mb-8`}
        >
        <motion.div
          variants={aboutVariants}
          animate={controls}
          className="mlg:col-span-6 smd:col-span-6 col-span-full"
          >
          <div className="items-center w-full">
            <h2 className="text-[#08fdd8] text-[3.2rem] sm:text-[4.5rem] font-poppins leading-[6rem] font-semibold">
              About Me.
            </h2>
          </div>
          <p className={`${styles.paragraph} text-[15px] leading-[25px] mt-5`}>
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
        <div className="mlg:col-span-6 smd:col-span-6 col-span-full">
          <motion.div
            variants={aboutBannerVariants}
            animate={controls}
            id="myCanvasContainer"
            className="relative h-full w-full items-center justify-center mlg:top-[-8rem] top-0"
            >
            <canvas
              width="500"
              height="500"
              id="tagcanvas"
              className="mx-auto w-full"
              ></canvas>
            <div id="taglist" style={ { display: "none" }}>
              <ul>
                {skills.map((skill) => (
                <li key={skill}>
                    <a href={skill.href}>{skill.title}</a>
                  </li>
              ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-12 gap-y-[2rem] xl:px-0 sm:px-16 px-6 justify-between mb-0 lg:mb-12">
        <motion.div
          variants={skillsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true }}
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
          variants={skillsBanner1Variants}
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true }}
          className="col-span-full md:col-span-6 pb-8 mlg:pb-0 rounded-3xl about-change-div"
          >
          {skillsBar.map((skill, index) => (
            <div className="line relative my-4">
              <div className="info flex justify-between items-center">
                <span className="font-semibold font-syncopate text-[18px] text-[white] uppercase">
                  {skill.name}
                </span>
                <span className="font-semibold font-syncopate text-[18px] text-[white] uppercase">{skill.progress}</span>
            </div>
              <div
              className={`bars relative bg-[lightgrey] h-[5px] w-full my-4 rounded-lg`}
              >
              <div className={`absolute h-[5px] bg-[#08fdd8] overflow-hidden`}
                style={ { width: `${skill.progress}` }}
                >
              </div>
            </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;