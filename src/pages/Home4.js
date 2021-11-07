import React from "react";
import Card from "./components/Card";
import Fade from "./components/Fade";
import "./Home4.css";
import Delivery from "./images/Delivery.png";
export default function Home4() {
  return (
    <>
      <div className="home4-main-container">
        <div>
          <Fade>
            <Card flag={true} />
          </Fade>
        </div>
      </div>
      <div className="home2-delivery-container">
        <div
          className="home2-delivery-image"
          style={{ backgroundImage: `url(${Delivery})` }}
        />
      </div>
    </>
  );
}
