import React, { useState } from "react";
import "./Login.css";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Notyf } from "notyf";

const ForgotPassword = () => {
  const [email, setemail] = useState("");
  const [newpassword, setNewpassword] = useState("");
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
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, answer,newpassword }
      );
      if (res && res.data && res.data.success) {
        notyf.success(res.data && res.data.message);
        navigate("/login");
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
      <Header />
      <main className="log-back">
        <div className="box" style={{height: "420px"}}>
          <span className="borderline"></span>
          <form>
            <h2 style={{ textDecoration: "Bold", fontSize: "23px" }}>Reset Password</h2>
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
                value={newpassword}
                onChange={(e) => setNewpassword(e.target.value)}
              />
              <span>Enter your New password</span>
              <i></i>
            </div>
            <br></br>
            <input type="submit" value="Reset" onClick={handlesubmit}></input>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ForgotPassword;

