import React from "react";
import Card from "./components/Card";
import Fade from "./components/Fade";
import "./Home2.css";
export default function Home2() {
  return (
    <>
      <div className="home2-main-container">
        <div>
          <Fade>
            <Card flag={false} />
          </Fade>
        </div>
      </div>
    </>
  );
}
