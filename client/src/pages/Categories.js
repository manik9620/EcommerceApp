import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Layout from "../components/Layouts/Layout";
import useCategory from "../hooks/useCategory";
import { motion } from "framer-motion";

const Categories = (props) => {
  const categories = useCategory();
  return (
    <>
      <motion.main
        className={`bg-${props.mode} pt-3`}
        style={{ minHeight: "100vh" }}
        intial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <Layout title={"All Categories"}></Layout>
        <div className="container">
          <div className="row">
            {categories.map((c) => (
              <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                <Link to={`/category/${c.slug}`} className="btn btn-primary">
                  {c.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default Categories;
