import React from "react";
import { FaAndroid, FaAppStoreIos } from "react-icons/fa";
import SafeCard from "./components/SafeCard";
import "./Home5.css";
import Mobile from "./images/Interface.png";
import { getdata, getdata2 } from "./assets/blogs";
export default function Home5() {
  const blogs = getdata();
  const blogs2 = getdata2();
  return (
    <div className="home5-main-container">
      <div className="home5-blog-container">
        <div>
          <div className=" home5-blog-main-header-text">
            <h3 className="home5-blog-text"> Our 100% Safe Standards</h3>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="home5-table-container">
              <div className="home5left-table-container">
                <h3 className="home5-sub-header-text">
                  RIDERS DELIVERY GUIDELINES.
                </h3>
                {blogs.map((b) => (
                  <SafeCard
                    header={b.title}
                    description={b.content}
                    image={b.image}
                  />
                ))}
              </div>
              <div className="home5right-table-container">
                <h3 className="home5-sub-header-text">
                  HOME CHEFS COOKING GUIDELINES.
                </h3>
                {blogs2.map((b) => (
                  <SafeCard
                    header={b.title}
                    description={b.content}
                    image={b.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home5-mobile-container">
        <div style={{ display: "flex" }}>
          <div className="home5-button-container">
            <FaAndroid size={25} color={"#fff"} />
            <p style={{ marginLeft: "10px" }}>Play Store</p>
          </div>
          <div className="home5-button-container">
            <FaAppStoreIos size={23} color={"#fff"} />
            <p style={{ marginLeft: "10px" }}>App Store</p>
          </div>
        </div>

        <div>
          <img src={Mobile} className="home5-image-container" />
        </div>
      </div>
    </div>
  );
}
