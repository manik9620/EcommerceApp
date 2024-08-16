import React, { useState } from "react";
import "./Login.css";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Layout from "../components/Layouts/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Notyf } from "notyf";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setemail] = useState("");
  const [newPassword, setNewpassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: "center",
      y: "top",
    },
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/forgot-password`, {
        email,
        answer,
        newPassword,
      });

      if (res && res.data && res.data.success) {
        notyf.success(res.data && res.data.message);
        navigate("/login");
      } else {
        notyf.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      notyf.error("Something went Wrong during forgetting password");
    }
  };
  return (
    <>
      <Layout title="EzCart - Forgot Password" />
      <motion.main
        className="log-back"
        intial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <div className="box" style={{ height: "420px" }}>
          <span className="borderline"></span>
          <form>
            <h2 style={{ textDecoration: "Bold", fontSize: "23px" }}>
              Reset Password
            </h2>
            <div className="inputbox">
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input
                type="text"
                required
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <span>Enter your security answer</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewpassword(e.target.value)}
              />
              <span>Enter your New password</span>
              <i></i>
            </div>
            <br></br>
            <input type="submit" value="Reset" onClick={handlesubmit}></input>
          </form>
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default ForgotPassword;
