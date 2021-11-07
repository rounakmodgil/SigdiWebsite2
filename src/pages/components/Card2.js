import React from "react";
import "./Card2.css";
import illustration from "../images/illustration1.png";
import illustration2 from "../images/illustration2.png";
import { Link } from "react-router-dom";

export default function Card2({ flag }) {
  return (
    <div className={flag ? "card2-main-container" : "card2-main-container2"}>
      {flag && (
        <>
          <div>
            <img src={illustration} className="card2-image-container" />
          </div>
          <div
            className="card2-text-container"
            style={{
              marginLeft: "90px",
            }}
          >
            <div>
              <h1 className="card2-text-header">Are you a home cook?</h1>
              <p className="card2-description-text">
                Does everybody around you love your food? Sigdi can help to get
                your food recognised to all of hyderabad. Now register with us
                by clicking the "Join Us" button.{" "}
              </p>
              <Link
                to={{
                  pathname: "/contact",
                  flag: true,
                }}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#3c2022",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                  }}
                >
                  <p className="card2-joinus-text">Join Us</p>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
      {!flag && (
        <>
          <div className="card2-text-container" style={{ marginRight: "90px" }}>
            <div>
              <h1 className="card2-text-header">Are you a foodie?</h1>
              <p className="card2-description-text">
                Ayyy. We heard you are bored of ordering food from restaurants.
                How about we get you maa ke haath ka khaana while you are away
                from home. Well, check out our app for more.{" "}
              </p>
              <Link
                to={{
                  pathname: "/contact",
                  flag: false,
                }}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    marginTop: "10px",

                    backgroundColor: "#3c2022",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                  }}
                >
                  <p className="card2-joinus-text">Join Us</p>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={illustration2}
              className="card2-image-container"
              params={{ flag: false }}
            />
          </div>
        </>
      )}
    </div>
  );
}
