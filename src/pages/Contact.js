import React, { useState } from "react";
import "./Contact.css";
import Navbar from "./components/Navbar";
import mainlogo from "./images/logo.png";
import Smallfooter from "./components/Smallfooter";
import Popup from "./components/Popup";
import { useLocation } from "react-router-dom";
import { API } from "aws-amplify";
import { createContact } from "../graphql/mutations";
import Loading from "./components/Loading";

function Contact() {
  const [email, Setemail] = useState("");
  const [name, Setname] = useState("");
  const [desc, Setdesc] = useState("");
  const [contact, Setcontact] = useState("");
  const [trigger, Settrigger] = useState(-1);
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  let location = useLocation();
  const [type, Settype] = useState(location.flag ? "Home Cook" : "Foodie");

  return (
    <>
      <Navbar />
      <div className="contact-main-container">
        <div className="contact-main-wrapper">
          <div className="contact-left-division-container">
            <div style={{ textAlign: "center" }}>
              <img
                src={mainlogo}
                style={{ height: "120px", paddingBottom: "5px" }}
              />
              <div style={{ textAlign: "center" }}>
                <p className="contact-logo-label1">Ghar Se Ghar Tak</p>
                <p className="contact-logo-label2">Feel free to reach out</p>
                <p className="contact-logo-label3">sigdihomefood@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-right-division-container">
            <form
              onSubmit={async (e) => {
                setLoading(true);
                e.preventDefault();
                const newContact = {
                  type: type,
                  name: name,
                  contact: contact,
                  email: email,
                  description: desc,
                };

                try {
                  await API.graphql({
                    query: createContact,
                    variables: { input: newContact },
                    authMode: "AWS_IAM",
                  });
                  setLoading(false);
                  Settrigger(0);
                } catch (e) {
                  Settrigger(1);
                  console.log(e);
                }
              }}
            >
              <div className="contact-labels-input">
                <input
                  placeholder={location.flag ? "Home Cook" : "Foodie"}
                  type="text"
                  value={type}
                  required
                  className="contact-name-label"
                  onChange={(e) => {
                    Settype(e.target.value);
                  }}
                />
              </div>
              <div className="contact-labels-input">
                <input
                  placeholder="Name*"
                  type="text"
                  value={name}
                  required
                  className="contact-name-label"
                  onChange={(e) => {
                    Setname(e.target.value);
                  }}
                />
              </div>
              <div className="contact-labels-input">
                <input
                  minLength={10}
                  maxLength={10}
                  placeholder="Contact Number*"
                  type="tel"
                  value={contact}
                  pattern="[6-9]{1}[0-9]{9}"
                  required
                  className="contact-name-label"
                  onChange={(e) => {
                    Setcontact(e.target.value);
                  }}
                />
              </div>
              <div className="contact-labels-input">
                <input
                  type="email"
                  value={email}
                  required
                  placeholder="Email*"
                  className="contact-name-label"
                  onChange={(e) => {
                    Setemail(e.target.value);
                  }}
                />
              </div>
              <div className="contact-labels-input">
                <textarea
                  maxLength={1000}
                  type="text"
                  value={desc}
                  required
                  placeholder="Description"
                  className="contact-name-label-description"
                  onChange={(e) => {
                    Setdesc(e.target.value);
                  }}
                />
                <p>
                  <i style={{ color: "gray", fontSize: "10px" }}>
                    *State the description in less than 1000 words*
                  </i>
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <input type="submit" className="contact-submit-button" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {trigger === 0 && (
        <Popup trigger={true} setTrigger={Settrigger}>
          <h1 className="popup-title">Hurray!</h1>
          <p className="popup-message">We have recorded your response </p>
        </Popup>
      )}
      {trigger === 1 && (
        <Popup trigger={true} setTrigger={Settrigger}>
          <h1 className="popup-title">Oops!</h1>
          <p className="popup-message">
            Something went wrong. Please try again{" "}
          </p>
        </Popup>
      )}
      {loading && <Loading />}
      <Smallfooter />
    </>
  );
}

export default Contact;
