import React from "react";
import Card2 from "./components/Card2";
import Fade from "./components/Fade";

import "./Home3.css";

function Home3() {
  return (
    <>
      <div className="home3-main-container">
        <div>
          <Fade>
            <Card2 flag={true} />
          </Fade>
          <Fade>
            <Card2 flag={false} />
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Home3;
