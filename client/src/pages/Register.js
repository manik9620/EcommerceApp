import React, { useState } from "react";
import "./Register.css";
import { useNavigate,Link } from "react-router-dom";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const Register = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
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
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address,answer }
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
      <main className="reg-back">
        <div className="box-reg">
          <span className="borderlin-reg"></span>
          <form>
            <h2 style={{ textDecoration: "Bold", fontSize: "23px" }}>
              Sign Up
            </h2>
            <div className="inputbox-reg">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputbox-reg">
              <input
                type="Password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <span>Password</span>
              <i></i>
            </div>
            <div className="inputbox-reg">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputbox-reg">
              <input
                type="number"
                className="no-arrow"
                required
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
              <span>Phone Number</span>
              <i></i>
            </div>
            <div className="inputbox-reg">
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
              <span>Address</span>
              <i></i>
            </div>
            <div className="inputbox-reg">
              <input
                type="text"
                required
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <span>What is your Favourite sports</span>
              <i></i>
            </div>
            <div
              className="links"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link to="/login">Sign In</Link>
            </div>
            <input type="submit" value="Sign Up" onClick={handlesubmit}></input>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
