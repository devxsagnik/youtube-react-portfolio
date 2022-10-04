import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import styles from "../style";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        "template_243tfbq",
        form.current,
        "RAUVCikOmrcrRxOTa"
      )
      .then(
        () => {
          toast.success("Your e-mail has been successfully sent. Thank You!", {
            position: "bottom-right",
            theme: "colored",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          e.target.reset();
        },
        () => {
          toast.error(
            "Sorry but we can't process your email right now. Please try again later.",
            {
              position: "bottom-right",
              theme: "colored",
              autoClose: 5000,
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
      <section
        id="contact"
        className={`${styles.paddingY} contact-area bg-[#111827]`}
      >
        <div
          className={`grid grid-cols-12 gap-4 xl:px-0 sm:px-16 px-6 justify-between mb-8 mt-2 xl:mt-6`}
        >
          <div className="lg:col-span-6 col-span-full mb-6">
            <div className="items-center w-full">
              <h2 className="text-[#08fdd8] text-[3.2rem] sm:text-[4.5rem] font-poppins leading-[6rem] font-semibold">
                Contact Me.
              </h2>
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
            </div>
          </div>
          <div className="col-span-full lg:col-span-6">
            <div className="map-wrap w-full px-6 sm:px-0">
              <MapContainer center={[22.4881888235, 88.3565324968]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[22.4881888235, 88.3565324968]}>
                  <Popup>Wanna have a coffee, come over here ;)</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
