import React from "react";

import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Layout from "../components/Layouts/Layout";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Layout title="EzCart - About Us" />

      <motion.div
        intial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <div className="about-container">
          <div className="about-box">
            <div className="left"></div>
            <div className="right">
              <h2 className="about-heading" style={{ fontSize: "27px" }}>
                About Us
              </h2>
              <p className="content-part">
                Welcome to EzCart, your one-stop destination for all your online
                shopping needs. We are dedicated to providing you with a
                seamless and enjoyable shopping experience right from the
                comfort of your home. At Your BuddyKart, we understand the
                importance of convenience and variety when it comes to online
                shopping. That's why we have carefully curated a vast collection
                of high-quality products across various categories, ranging from
                fashion and beauty to electronics and home decor. Whether you're
                looking for the latest fashion trends, cutting-edge gadgets, or
                stylish home essentials, we've got you covered.Customer
                satisfaction is our top priority, and we strive to exceed your
                expectations with every purchase. We offer secure and seamless
                online transactions, fast shipping, and hassle-free returns. Our
                friendly customer support team is always ready to assist you
                with any inquiries or concerns you may have. We value our
                relationship with you, our valued customers, and aim to build
                long-lasting connections based on trust and reliability. Your
                feedback and suggestions are important to us as we continuously
                improve our services to serve you better.Thank you for choosing
                EzCart. We invite you to explore our wide range of products and
                experience the convenience of online shopping at its best.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
