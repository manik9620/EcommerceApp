import React from "react";
import "./Contact.css";
import Layout from "../components/Layouts/Layout";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
     
      <Layout title="EzCart - Contact Us" />
      <motion.div
        intial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <div className="contact-container">
          <div className="contact-box">
            <div className="left"></div>
            <div className="right">
              <h2 className="contact-heading" style={{ fontSize: "27px" }}>
                Contact Us
              </h2>
              <input type="text" className="field" placeholder="Your Name" />
              <input type="text" className="field" placeholder="Your Email" />
              <input type="text" className="field" placeholder="Phone" />
              <textarea placeholder="Message" className="field"></textarea>
              <button className="button">Send</button>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};
export default Contact;
