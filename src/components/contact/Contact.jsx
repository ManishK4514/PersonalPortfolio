import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// notify-copy-link
const notifyMessageSent = () => {
  toast("Message Sent!!!")
}

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ty1p9d9",
        "template_tiwuosb",
        form.current,
        "ciAKGsIV-L5ilNSpY"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear the form fields
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>manish80842@gmail.com</h5>
            <a href="mailto:manish80842@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9065129628</h5>
            <a
              href="https://api.whatsapp.com/send?phone=919065129628"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" onClick={() => {notifyMessageSent();}}>
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
