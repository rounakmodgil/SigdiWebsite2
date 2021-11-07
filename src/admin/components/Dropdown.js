import React, { useState } from "react";

import "./Dropdown.css";
import { FaUser, FaCog, FaBackward } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";

const MenuItems = [
  {
    id: "admin-profile",
    title: "Profile",
    path: "/mycourses",
    cName: "dropdown-link",
  },

  {
    id: "admin-settings",
    title: "Settings",
    path: "/profilesettings",
    cName: "dropdown-link",
  },
  {
    id: "admin-logout",
    title: "Logout",
    path: "/",
    cName: "dropdown-link",
  },
];

function Dropdown({ history, logout }) {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const logoutuser = (id) => {};
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="admin-list-li-container">
              {item.id === "admin-profile" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "8px",
                    }}
                  >
                    <FaUser size={12} />
                  </div>
                  <p className="dropdown-li-items">{item.title}</p>
                </>
              )}
              {item.id === "admin-settings" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "8px",
                    }}
                  >
                    <FaCog size={12} />
                  </div>
                  <p className="dropdown-li-items">{item.title}</p>
                </>
              )}
              {item.id === "admin-logout" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "8px",
                    }}
                  >
                    <FaBackward size={12} />
                  </div>

                  <div
                    onClick={() => {
                      Auth.signOut().then(() => {
                        history.push("/bleeblue");
                      });
                    }}
                  >
                    <p className="dropdown-li-items">{item.title}</p>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
