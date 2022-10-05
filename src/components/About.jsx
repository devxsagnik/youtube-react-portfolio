import { useEffect } from "react";
import styles from "../style";
import { skills, frontExperience, backExperience } from "../constants";

const About = () => {
  useEffect(() => {
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "#08FDD8",
      textFont: "Poppins, sans-serif",
      outlineThickness: 0.5,
      outlineColour: "#FE0853",
      maxSpeed: 0.06,
      freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1.1,
    };
    try {
      TagCanvas.Start("tagcanvas", "taglist", tagCanvasOptions);
    } catch (e) {
      console.log("Canvas error.");
      console.log(e);
    }
  }, []);

  return (
    <section
      id="about"
      className={`${styles.paddingY} about_wrapper bg-[#111827]`}
    >
      <div
        className={`grid grid-cols-12 gap-4 xl:px-0 sm:px-16 px-6 justify-between mb-8`}
      >
        <div className="mlg:col-span-6 smd:col-span-6 col-span-full">
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
        </div>
        <div className="mlg:col-span-6 smd:col-span-6 col-span-full">
          <div
            id="myCanvasContainer"
            className="relative h-full w-full items-center justify-center mlg:top-[-8rem] top-0"
          >
            <canvas
              width="500"
              height="500"
              id="tagcanvas"
              className="mx-auto w-full"
            ></canvas>
            <div id="taglist" style={{ display: "none" }}>
              <ul>
                {skills.map((skill) => (
                  <li key={skill.title}>
                    <a href={skill.href}>{skill.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-12 gap-y-[2rem] xl:px-0 sm:px-16 px-6 justify-between mb-0 lg:mb-12">
        <div className="col-span-full mlg:col-span-4">
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
        </div>
        <div className="col-span-full sm:col-span-6 lxl:col-span-4 pb-8 mlg:pb-0 rounded-3xl bg-[#12141c] about-change-div">
          <div className="items-center w-full mt-6">
            <h2 className="text-[#08fdd8] text-[1.5rem] sm:text-[1.8rem] text-center font-poppins leading-[4rem] sm:leading-[5rem] font-semibold">
              Frontend.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-1 xs:gap[2rem] mt-8 ml-7 xs:ml-[4.5rem] sm:ml-9 md:ml-[5rem] lxl:ml-9 items-center gap-y-[2rem]">
            {frontExperience.map((skill, index) => (
              <div className="flex gap-3">
                <i className="bx bxs-badge-check text-cyan-400 mt-[6px] hover:text-[#08fdd8] transition-all duration-300 ease-in-out cursor-pointer"></i>
                <div>
                  <h4 className="text-white font-poppins hover:text-[#08fdd8] font-semibold transition-all duration-300 ease-in-out cursor-pointer">
                    {skill.name}
                  </h4>
                  <p className={`${styles.paraExp} leading-[25px]`}>
                    {skill.progress}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-full sm:col-span-6 lxl:col-span-4 pb-8 mlg:pb-0 rounded-3xl bg-[#12141c] about-change-div">
          <div className="items-center w-full mt-6">
            <h2 className="text-[#08fdd8] text-[1.5rem] sm:text-[1.8rem] text-center font-poppins leading-[4rem] sm:leading-[5rem] font-semibold">
              Backend.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-1 xs:gap[2rem] mt-8 ml-7 xs:ml-[4.5rem] sm:ml-9 md:ml-[5rem] lxl:ml-9 items-center gap-y-[2rem]">
            {backExperience.map((skill, index) => (
              <div className="flex gap-3">
                <i className="bx bxs-badge-check text-cyan-400 mt-[6px] hover:text-[#08fdd8] transition-all duration-300 ease-in-out cursor-pointer"></i>
                <div>
                  <h4 className="text-white font-poppins hover:text-[#08fdd8] transition-all duration-300 ease-in-out font-semibold cursor-pointer">
                    {skill.name}
                  </h4>
                  <p className={`${styles.paraExp} leading-[25px]`}>
                    {skill.progress}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
