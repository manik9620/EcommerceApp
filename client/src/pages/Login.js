import React, { useState } from "react";
import "./Login.css";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Notyf } from "notyf";
import { useAuth } from "../context/Auth";
import Layout from "../components/Layouts/Layout";
import { motion } from "framer-motion";


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { auth, setAuth } = useAuth();
  const location = useLocation();

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
      const res = await axios.post(`/api/v1/auth/login`, { email, password });
      if (res && res.data && res.data.success) {
        notyf.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        notyf.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      notyf.error("Something went Wrong");
    }
  };
  return (
    <>
      <Layout title="EzCart - Login" />
      <motion.main
        className="log-back"
        intial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <div className="box">
          <span className="borderline"></span>
          <form>
            <h2 style={{ textDecoration: "Bold", fontSize: "23px" }}>Login</h2>
            <div className="inputbox">
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <span>Email</span>
              
            </div>
            <div className="inputbox">
              <input
                type="Password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              <Link to="/forgot-password">Forgot Password</Link>
              <Link to="/register">Sign Up</Link>
            </div>
            <input type ="submit" value="Login" onClick={handlesubmit}></input>
          </form>
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default Login;
