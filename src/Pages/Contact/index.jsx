import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../style";
import { motion } from "framer-motion";
import { position } from "../../constants";
import { contactFormVariants, contactMapVariants } from "../../animations";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    const emailjsServiceCode = import.meta.env.VITE_EMAILJS_SERVICE;
    const emailjsTemplateCode = import.meta.env.VITE_EMAILJS_TEMPLATE;
    const emailjsClientId = import.meta.env.VITE_EMAILJS_ID;

    toast.info("Please wait while we are processing your message!!", {
      position: "bottom-right",
      theme: "colored",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    
    emailjs
      .sendForm(
        emailjsServiceCode,
        emailjsTemplateCode,
        form.current,
        emailjsClientId
      )
      .then(
        () => {
          setTimeout(() => {
            toast.success(
              "Your e-mail has been successfully sent. Thank You!",
              {
                position: "bottom-right",
                icon: "🚀",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
              }
            );
            e.target.reset();
          }, 5000);
        },
        () => {
          toast.error(
            "Sorry but we can't process your email right now. Please try again later.",
            {
              position: "bottom-right",
              theme: "colored",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            }
          );
        }
      );
  };

  return (
    <>
      <section id="contact" className={`${styles.paddingY} contact-area`}>
        <div
          className={`grid grid-cols-12 gap-4 xl:px-0 sm:px-16 px-6 justify-between mb-8 mt-2 xl:mt-6`}
        >
          <div className="lg:col-span-6 col-span-full mb-6">
            <motion.div
              variants={contactFormVariants}
              initial="hidden"
              animate="show"
              className="items-center w-full">
              <h2 className="text-[#08fdd8] text-[3.2rem] sm:text-[4.5rem] font-coolvetica tracking-wide leading-[6rem] font-medium">
                Contact Me.
              </h2>
              <p
                className={`${styles.paragraph} text-[15px] leading-[25px] mt-5`}
              >
                I am open to recieve full stack projects.If you wanna contact
                me, just drop a line here and i will get back to you soon.
              </p>
              <div className="contact-form mt-12">
                <form id="contact" ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-12 gap-4 gap-y-8">
                    <div className="col-span-12 md:col-span-6 relative pb-[1.3rem] name-field">
                      <input
                        className="input-field-line"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        autoComplete="off"
                        required
                      />
                      <label className="input-label-line" htmlFor="">
                        Username
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-6 relative pb-[1.3rem] email-field">
                      <input
                        className="input-field-line"
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="off"
                        placeholder="Email"
                        required
                      />
                      <label className="input-label-line" htmlFor="email">
                        Email
                      </label>
                    </div>
                    <div className="col-span-12 relative pb-[1.3rem] subject-field">
                      <input
                        className="input-field-line"
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        autoComplete="off"
                        required
                      />
                      <label className="input-label-line" htmlFor="Subject">
                        Subject
                      </label>
                    </div>
                    <div className="col-span-12 relative pb-[1.3rem] message-field">
                      <textarea
                        className="input-field-line"
                        name="message"
                        id="message"
                        cols="30"
                        rows="6"
                        autoComplete="off"
                        placeholder="Message"
                        required
                      ></textarea>
                      <label className="input-label-line" htmlFor="textarea">
                        Message
                      </label>
                    </div>
                    <div className="col-span-full ss:col-span-6 md:col-start-7 md:col-end-13 btn-cont-div py-3">
                      <button
                        id="submit-form"
                        className="btn-contact submit-form"
                        type="submit"
                        value="Submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={contactMapVariants}
            initial="hidden"
            animate="show"
            className="col-span-full lg:col-span-6">
            <div className="map-wrap w-full px-6 sm:px-0">
              <MapContainer center={[position[0].lat, position[0].long]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[position[0].lat, position[0].long]}>
                  <Popup>Wanna have a coffee, come over here ;)</Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
