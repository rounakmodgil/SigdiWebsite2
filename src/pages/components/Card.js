import React from "react";
import MediaQuery from "react-responsive";
import Curry1 from "../images/curryleaves1.png";
import Curry2 from "../images/curryleaves2.png";
import "./Card.css";
import food from "../images/food.png";
import charminar from "../images/charminar.png";

export default function Card({ flag }) {
  return (
    <>
      <MediaQuery minDeviceWidth={700}>
        <div
          className="card-main-container"
          style={{ flexDirection: flag ? "row-reverse" : "row" }}
        >
          <div className="card-image-divcontainer">
            <img
              src={flag ? food : charminar}
              className="card-image-container"
            />
          </div>
          <div className="card-text-container">
            <div
              style={{
                position: "absolute",
                bottom: "-100px",
                left: flag ? "-80px" : "",
                right: flag ? "" : "-100px",
              }}
            >
              <img
                src={flag ? Curry2 : Curry1}
                style={{
                  height: "250px",
                }}
              />
            </div>
            <div>
              {flag === false && <h1 className="card-title-text1">Location</h1>}

              {flag === true && <h1 className="card-title-text1">FSSAI</h1>}

              {flag === false && (
                <h1 className="card-title-text2">We Here in Hyderabad</h1>
              )}

              {flag === true && (
                <h1 className="card-title-text2">
                  Hygiene and Safety Standards
                </h1>
              )}

              {flag === false && (
                <p className="card-content-text">
                  We wish to deliver food made with whole lot of love and that
                  can only be done in indian homes made by some superhumans. We
                  want this love to be spread all across Hyderabad.{" "}
                </p>
              )}
              {flag === true && (
                <p className="card-content-text">
                  Food Safety and Standards Authority of India is a statutory
                  body established under the Ministry of Health & Family
                  Welfare, Government of India. Every homechef who registers
                  with us needs to have an FSSAI registration. Don't worry if
                  you don't have one, Sigdi will help you do it.{" "}
                </p>
              )}
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={700}>
        <div className="card700-main-container">
          <div>
            <img
              src={flag ? food : charminar}
              className="card700-image-container"
            />
          </div>
          <div className="card700-text-container">
            <div>
              {flag === false && <h1 className="card-title-text1">Location</h1>}

              {flag === true && <h1 className="card-title-text1">FSSAI</h1>}

              {flag === false && (
                <h1 className="card-title-text2">We Here in Hyderabad</h1>
              )}

              {flag === true && (
                <h1 className="card-title-text2">
                  Hygiene and Safety Standards
                </h1>
              )}

              {flag === false && (
                <p className="card-content-text">
                  We wish to deliver food made with whole lot of love and that
                  can only be done in indian homes made by some superhumans. We
                  want this love to be spread all across Hyderabad.{" "}
                </p>
              )}
              {flag === true && (
                <p className="card-content-text">
                  Food Safety and Standards Authority of India is a statutory
                  body established under the Ministry of Health & Family
                  Welfare, Government of India. Every homechef who registers
                  with us needs to have an FSSAI registration. Don't worry if
                  you don't have one, Sigdi will help you do it.{" "}
                </p>
              )}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "-50px",
                left: flag ? "-55px" : "",
                right: flag ? "" : "-20px",
              }}
            >
              <img
                src={flag ? Curry2 : Curry1}
                style={{
                  height: "150px",
                }}
              />
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}
