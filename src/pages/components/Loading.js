import React from "react";
import "./Popup.css";
import Preloader from "../images/preloader.gif";
function Loading(props) {
  return (
    <div className="popup">
      <div>
        <img src={Preloader} style={{ height: "50px" }} />
      </div>
    </div>
  );
}

export default Loading;
