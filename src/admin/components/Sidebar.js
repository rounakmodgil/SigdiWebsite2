import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import {
  FaTv,
  FaHeart,
  FaBook,
  FaRoute,
  FaRegPaperPlane,
  FaUser,
} from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import logo from "../../pages/images/sigdimainlogo.png";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <ProSidebar collapsed={false} width="20vw">
        <SidebarHeader>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ height: 40, opacity: 0.6 }} src={logo} />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle" popperArrow={true}>
            <MenuItem icon={<FaTv />}>
              {" "}
              <Link to="/admindashboard" />
              Dashboard
            </MenuItem>
            <MenuItem icon={<FaBook />}>
              {" "}
              <Link to="/admincontact" />
              Contact
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <h5 style={{ display: "flex", justifyContent: "center" }}>
            Sigdi Home Food
          </h5>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
