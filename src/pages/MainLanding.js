import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import FooterSigdi from "./FooterSigdi";
import Nonce from "./nonce";
import Loading from "./images/loading.gif";
import Smallfooter from "./components/Smallfooter";
import Home5 from "./Home5";
import PreLoader from "./Preloader";

function MainLanding() {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
    }, 2000);
  }, []);
  return (
    <>
      {animating && <PreLoader />}
      {!animating && (
        <>
          <Home />
          <Home2 />
          <Home3 />
          <Home4 />
          <Home5 />
          <FooterSigdi />
          <Nonce />
        </>
      )}
    </>
  );
}

export default MainLanding;
