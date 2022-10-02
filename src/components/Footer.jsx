import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} mx-6 sm:mx-16 xl:mx-0 flex-col`}
    >
      <div className="text-center footer-logo">
        <a>
          <h5 className="h-auto w-auto text-[28px] font-outfit font-extrabold leading-7 text-white">
            Sagnik<span className="text-red-500 ml-[2px]">.</span>
          </h5>
        </a>

        {footerLinks.map((footerlink) => (
          <div className="text-center my-12">
            {footerlink.links.map((link, index) => (
              <a
                className={`font-poppins font-semibold text-[18px] leading-[24px] text-dimWhite hover:text-secondary transition-all duration-150 ease-in-out cursor-pointer ${
                  index !== footerlink.links.length - 1 ? "mx-4" : "ml-4"
                }`}
                href={`${link.link}`}
                target="_blank"
              >
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 cwsagnik.com.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <a href={`${social.link}`} target="_blank">
              <i
                className={`${
                  social.faIcon
                } text-[21px] text-dimWhite hover:text-[#08fdd8] transition-colors ease-in-out duration-300 object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              ></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
