import React from "react";
// import Layout from '../components/Layouts/Layout';
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <main
        role="main"
        style={{
          minHeight: "90vh",
          background: "linear-gradient(to top, #aa076b, #61045f)",
        }}
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
      </main>
      <Footer />
    </>
  );
};

export default PageNotFound;
