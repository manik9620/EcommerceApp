import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-auto">
      <div className="container">
        <h2 className="text-center" style={{fontSize:'20px',paddingTop:'15px'}}>All Right Reserved &copy; CoffeeCoders</h2>
        <p className="text-center mt-3">
          <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |{" "}
          <Link to="/policy">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
