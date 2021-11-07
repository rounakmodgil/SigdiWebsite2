import React, { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TableReusable from "./components/TableReusable";
import { useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";

function AdminLanding({ history }) {
  const location = useLocation();
  const [coder, setCoder] = useState(false);
  const tablelabels = ["ID", "Name", "Phone", "Email", "Description", "More"];
  useEffect(() => {
    async function checker() {
      try {
        await Auth.currentAuthenticatedUser();
        setCoder(true);
      } catch (e) {
        console.log(e);
        history.push("/");
      }
    }
    checker();
  }, []);

  return (
    <>
      {coder && (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ width: "100%" }}>
            <Header history={history} logout={location.logout} />
            <div style={{ minHeight: "100vh", backgroundColor: "#ebedef" }}>
              erggd
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default AdminLanding;
