import React from "react";
import MediaQuery from "react-responsive";

import Blogimg from "../images/blogimg.png";
import "./Card3.css";
import { Link } from "react-router-dom";
export default function Card3({ title, content, id }) {
  let description =
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32 The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks ";
  return (
    <>
      <MediaQuery minDeviceWidth={960}>
        <div className="card3-main-container">
          <img
            src={Blogimg}
            style={{
              width: "100%",
              height: "45%",
              borderRadius: "10px 10px 0px 0px",
            }}
          />
          <div className="card3-text-container">
            <h2 className="card3-header-text">{title}</h2>
            <p className="card3-description-text">{content.slice(0, 250)}</p>
          </div>
          <div className="card3-read-more-text-container">
            <Link
              to={{ pathname: "/blogs", id: id }}
              style={{ textDecoration: "none" }}
            >
              <p className="card3-read-more-text">Read More...</p>
            </Link>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={960}>
        <div className="card3960-main-container">
          <img
            src={Blogimg}
            style={{
              width: "100%",
              height: "45%",
              borderRadius: "10px 10px 0px 0px",
            }}
          />
          <div>
            <div className="card3-text-container">
              <h2 className="card3-header-text">{title}</h2>
              <p className="card3-description-text">{content.slice(0, 250)}</p>
            </div>
            <div className="card3-read-more-text-container">
              <Link to="/blogs" style={{ textDecoration: "none" }}>
                <p className="card3-read-more-text">Read More...</p>
              </Link>
            </div>{" "}
          </div>
        </div>
      </MediaQuery>
    </>
  );
}
