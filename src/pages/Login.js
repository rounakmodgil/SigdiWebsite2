import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

import "./Login.css";
import AcademyNavbar from "./components/Navbar";
import Smallfooter from "./components/Smallfooter";
import cover from "./images/cover2.png";
const NOTSIGNIN = "You are NOT logged in";
const SIGNEDIN = "You have logged in successfully";
const SIGNEDOUT = "You have logged out successfully";
const WAITINGFOROTP = "Enter OTP number";
const VERIFYNUMBER = "Verifying number (Country code +XX needed)";

export default function Login() {
  let history = useHistory();
  const [message, setMessage] = useState("Welcome to Demo");
  const [session, setSession] = useState(null);
  const [number, setNumber] = useState("");
  const [user, setUser] = useState(null);
  const [pin, setPin] = useState(null);

  const password = Math.random().toString(10) + "Abc#";
  useEffect(() => {
    verifyAuth();
  }, []);

  const verifyAuth = () => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        setMessage(SIGNEDIN);
        setSession(null);
        history.push({
          pathname: "/admindashboard",
          logout: signOut,
        });
      })
      .catch((err) => {
        console.error(err);
        setMessage(NOTSIGNIN);
        setUser(null);
        setPin("");
      });
  };
  const signOut = () => {
    if (user) {
      Auth.signOut();
      setUser(null);
      setPin("");
      setMessage(SIGNEDOUT);
    } else {
      setMessage(NOTSIGNIN);
    }
  };
  const verifyOtp = (op) => {
    console.log("inside" + op);
    Auth.sendCustomChallengeAnswer(session, op)
      .then((user) => {
        setUser(user);
        setMessage(SIGNEDIN);
        setSession(null);
        const group = user.signInUserSession.idToken.payload["cognito:groups"];
        if (String(group) === "admin") {
          history.push({
            pathname: "/admindashboard",
            logout: signOut,
          });
        } else {
          window.location.href = "https://youtu.be/dQw4w9WgXcQ";
        }
      })
      .catch((err) => {
        setMessage(err.message);
        setPin("");
        console.log(err);
      });
  };
  const signIn = (num) => {
    setMessage(VERIFYNUMBER);
    console.log("bl" + num);
    setNumber(num);
    Auth.signIn(num)
      .then((result) => {
        setSession(result);
        setMessage(WAITINGFOROTP);
      })
      .catch((e) => {
        if (e.code === "UserNotFoundException") {
          window.location.href = "https://youtu.be/dQw4w9WgXcQ";
        } else if (e.code === "UsernameExistsException") {
          setMessage(WAITINGFOROTP);
          signIn();
        } else {
          console.log(e.code);
          console.error(e);
        }
      });
  };

  const formik = useFormik({
    initialValues: {
      phonenumber: "",
      otp: "",
    },

    onSubmit: async (values) => {
      if (!user && !session) {
        try {
          console.warn("nkln");
          let number = "+91" + values.phonenumber;
          signIn(number);
        } catch (err) {
          alert("Failed");
        }
      }
      if (!user && session) {
        try {
          let pass = "" + values.otp;
          setPin(pass);
          verifyOtp(pass);
        } catch (err) {
          alert("Failed otp");
        }
      }
    },
  });

  return (
    <>
      <>
        <AcademyNavbar />
        <div className="contact-section" id="contact">
          <div className="login-container-1">
            <div className="login-content-wrapper">
              <form onSubmit={formik.handleSubmit}>
                <div className="login-email-wrapper">
                  <div className="login-label-container">Phone Number</div>{" "}
                  <input
                    id="abcdefg"
                    type="phonenumber"
                    name="phonenumber"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.phonenumber}
                  />
                </div>
                {!user && session && (
                  <div className="login-email-wrapper">
                    <div className="login-label-container">OTP</div>
                    <input
                      id="abcdefg"
                      type="number"
                      name="otp"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.otp}
                    />
                  </div>
                )}
                <div>
                  <input
                    type="submit"
                    name="Login"
                    value="Login"
                    id="loginbutton"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "50px",
            opacity: 0.8,
          }}
        >
          <img
            style={{ width: "100%", marginBottom: "-30px", opacity: 0.9 }}
            src={cover}
          />
        </div>
        <Smallfooter />
      </>
    </>
  );
}
