import React, { useState, useEffect } from "react";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Layout from "../components/Layouts/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const CategoryProduct = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="container mt-3">
          <h4
            className={`text-center text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            Category - {category?.name}
          </h4>
          <h6
            className={`text-center text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            {products?.length} result found{" "}
          </h6>
          <div className="row">
            <div className="col-md-12 ">
              <div className="d-flex flex-wrap">
                {products?.map((p) => (
                  <div
                    className={`card m-2 bg-${props.mode}`}
                    style={{ width: "18rem" }}
                    key={p._id}
                  >
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div
                      className={`card-body text-${
                        props.mode === "light" ? "dark" : "light"
                      }`}
                    >
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">
                        {p.description.substring(0, 30)}...
                      </p>
                      <p className="card-text"> $ {p.price}</p>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-primary "
                          onClick={() => navigate(`/product/${p.slug}`)}
                        >
                          More Details
                        </button>
                        <button className="btn btn-secondary pl-2 ">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default CategoryProduct;
