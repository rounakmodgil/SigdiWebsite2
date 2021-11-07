import React, { Component } from "react";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import Hyderabad from "./images/hyderabad.png";
import "./FooterSigdi.css";
import Smallfooter from "./components/Smallfooter";
class FooterSigdi extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="footer-section">
          <div className="footerheading">Catch Us Candid Here</div>
          <div className="footerelements">
            <div>
              <a
                className="footerelement-text1"
                target="_blank"
                href="https://in.linkedin.com/company/sigdihomefood"
              >
                LinkedIn
              </a>
            </div>

            <div>
              <a
                className="footerelement-text2"
                target="_blank"
                href="https://www.instagram.com/sigdi_homefood/"
              >
                Instagram{" "}
              </a>
            </div>

            <div>
              <a
                className="footerelement-text3"
                target="_blank"
                href="https://www.facebook.com/sigdihomefood/"
              >
                Facebook
              </a>
            </div>
            <a
              className="footerelement-text4"
              target="_blank"
              href="https://www.twitter.com/SigdiHomeFood/"
            >
              Twitter
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={Hyderabad}
              style={{ width: "50%", marginBottom: "-30px", marginTop: "50px" }}
            />
          </div>
          <Smallfooter />
        </div>
      </>
    );
  }
}
export default FooterSigdi;
