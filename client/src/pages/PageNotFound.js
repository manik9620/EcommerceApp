import React from "react";
// import Layout from '../components/Layouts/Layout';
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { Link } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <>
      
      <Layout title="Page Not Found" />
      <motion.main
        role="main"
        style={{
          minHeight: "90vh",
          background: "linear-gradient(to top, #aa076b, #61045f)",
        }}
        intial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <div className="root pt-5  text-white">
          <div className="container pt-5 text-center ">
            <h1 className="head pt-5 ">
              <span>404</span>
            </h1>
            <p className="pb-4">Oops! The Page you requested was not found!</p>
            <Link to="/" className="btn-online ">
              Back to Home
            </Link>
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default PageNotFound;
