import styles from "../../style";
import { page404 } from "../../assets";

const Error = () => {
  return (
    <section id="error" className={`${styles.paddingY} error_wrapper my-20`}>
      <div
        className={`grid grid-cols-12 gap-4 xl:px-0 sm:px-16 px-6 justify-between`}
      >
        <div className="md:col-span-6 col-span-full">
          <div className="items-center w-full">
            <h2 className="text-[#08fdd8] text-[3.2rem] sm:text-[4.5rem] font-coolvetica tracking-wider leading-[6rem] font-medium">
              Wrong Way?!🧐
            </h2>
          </div>
          <p className={`${styles.paragraph} text-[15px] leading-[25px] mt-5`}>
            You seem to be lost, stranger.Wanna have a coffee or noodles, i am
            making it. Just seat tight🍜.
            <br />
            Ohh sorry you came to read something? Here are some links which can
            help you get back to reading something about me:
            <br />
            <br />
            <a href="/" className="text-[#08fdd8]">
              • Get back to Home
            </a>
            <br />
            <a href="/about" className="text-[#08fdd8]">
              • Read about me
            </a>
            <br />
            <a href="/contact" className="text-[#08fdd8]">
              • Contact Me
            </a>
          </p>
        </div>
        <div className={`md:col-span-6 col-span-full ${styles.flexCenter}`}>
          <img
            src={page404}
            alt="404-image"
            className="w-[100%] h-[100%] z-[5] scale-150 relative"
          />
        </div>
      </div>
    </section>
  );
}

export default Error