import React from "react";
import Navbar from "./components/Navbar";
import Smallfooter from "./components/Smallfooter";
import "./Blogs.css";
import { useLocation } from "react-router-dom";
import { getdata } from "./assets/blogs";
function Boiler() {
  let location = useLocation();
  const blogs = getdata();
  return (
    <>
      <Navbar />
      <div className="blogs-main">
        <div className="blogs-title-background">
          <h1 className="blogs-header">BLOG</h1>
        </div>
        {blogs.map((b) => (
          <>
            {b.id === location.id && (
              <div className="blogs-container">
                <div className="blogs-title">{b.title}</div>
                <div className="blogs-content">{b.content}</div>
              </div>
            )}
          </>
        ))}
      </div>
      <Smallfooter />
    </>
  );
}

export default Boiler;
