import React from "react";

import MainLoader from "./images/mainloader.gif";
function PreLoader(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img src={MainLoader} style={{ height: "50px" }} />
      </div>
    </div>
  );
}

export default PreLoader;
