import React from "react";
import "./Home.css";
import mainlogo from "./images/sigdimainlogo.png";
import Fade from "./components/Fade";

function Home() {
  return (
    <>
      <div className="home-main-container" id="home">
        <div className="home-left-container" style={{ width: "70vw" }}>
          <div className="home-left-wrapper">
            <Fade>
              <img src={mainlogo} className="home-logo-container" />
            </Fade>
            <div className="home-text-container">
              <Fade>
                <h1 className="home-title-text">Ghar se Ghar tak</h1>

                <p className="home-content-text">
                  At Sigdi, we provide a platform to deliver your favorite and
                  delicious food dishes at your doorstep made by our home chefs.
                  We promise to maintain hygiene standards and no compromise for
                  your Mann-Pasand taste!{" "}
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="home-topview-food-container"></div>
      </div>
    </>
  );
}

export default Home;
