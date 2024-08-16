import React from "react";
import Layout from "../components/Layouts/Layout";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import "./Policy.css";
import { motion } from "framer-motion";

const Policy = () => {
  return (
    <>
      <Layout title="EzCart - Policy" />
      <motion.div
        intial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <div className="privacy-first-section">
          <h1> Privacy Policy</h1>
          <h2>Protecting Your Privacy</h2>
          <p className="uppermost-paragraph">
            We use data to make shopping on Amazon and our products better and
            more convenient for you. Protecting your privacy and the security of
            your data has always been a top priority for Amazon.
          </p>
          <p className="uppermost-paragraph">
            Trusting us with your data means we can show you items inspired by
            your previous purchases, whether that's a new line of clothing, a
            film or TV show, or a great book that was just released. It also
            means you don't have to enter your payment and delivery information
            every time you make an order.
          </p>
        </div>
        <div className="privacy-second-section">
          <h1>FAQ</h1>
          <p className="upper-paragraph">
            We answer the most frequently asked questions about our privacy
            policy .
          </p>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  What is a privacy policy?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <p className="inner-parapraph">
                    A privacy policy is a legal document that explains how a
                    company or EZ Cart collects, uses, and shares personal
                    information. Privacy policies should outline what personal
                    information is collected, how the information is used,
                    whether the information is shared with third parties, what
                    rights users have over their data, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  What data does our EZ Cart use?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <p className="inner-parapraph">
                    You can access and manage your data, such as your content,
                    order history and communication preferences, in Your
                    Account, or manage your digital and device privacy settings
                    directly on the device you're using. For anything you can't
                    find in Your Account or on your device, you can contact us
                    and we'll be happy to help.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  How do I view and manage my data on EZ Cart?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <p className="inner-parapraph">
                    There are a number of ways you provide us with data; for
                    example, when you buy something, provide a delivery address,
                    leave a review, listen to a song, or contact us for help.
                  </p>
                  <p className="inner-parapraph">
                    We use your contact and delivery details, content
                    preferences, and shopping history to provide a better
                    experience and to invent new ways to make things even easier
                    for you in the future.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  How does our EZ Cart keep data secure?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingFour"
              >
                <div className="accordion-body">
                  <p className="inner-parapraph">
                    Any time data moves between your devices or our databases,
                    we encrypt it to keep it secure. Protecting information
                    about our customers is key to our business, and we are not
                    in the business of selling your personal information to
                    others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Policy;
