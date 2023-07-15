import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import  { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <Toaster />
        {props.title}
        {props.children  }
      </main>
      <Footer />
    </>
  );
};

export default Layout;
