import React, { useState } from "react";
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { CSVLink, CSVDownload } from "react-csv";
import Popup from "./Popup";
import "./TableReusable.css";
import { API, graphqlOperation } from "aws-amplify";
import { deleteContact } from "../../graphql/mutations";
function CtfTablelist({ flag, tablelabels, tablelist, history }) {
  const [activepage, setActivePage] = useState(1);
  const [trigger, settrigger] = useState(-1);
  const [deleteuser, setDeleteUser] = useState(null);
  const [view, setViewUser] = useState(null);
  const handleUserGistView = (item) => {
    setViewUser(item);
    settrigger(1);
  };
  const handleUserGistDelete = (item) => {
    setDeleteUser(item);
    settrigger(0);
  };
  const deletecontact = async (id) => {
    await API.graphql(graphqlOperation(deleteContact, { input: { id: id } }));
    settrigger(-1);
    window.location.reload();
  };
  const numberofpages = Math.ceil(tablelist.length / 10);
  return (
    <>
      {flag === "allcontacts" && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "10px 5px ",
            }}
          >
            <CSVLink
              data={tablelist}
              style={{
                color: "white",
                textDecoration: "none",
                backgroundColor: "green",
                height: "30px",
                width: "100px",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "sans-serif",
                fontSize: "12px",
              }}
            >
              Download csv
            </CSVLink>
          </div>
          <table
            id="ctftable"
            style={{
              width: "100%",
              color: "#ffffff",
            }}
          >
            <tbody>
              <tr className="table-header">
                {tablelabels.map((label) => (
                  <td>{label}</td>
                ))}
              </tr>
              {tablelist
                .slice((activepage - 1) * 10, activepage * 10)
                .map((item) => {
                  return (
                    <>
                      <tr className="table-data" key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.name} </td>
                        <td>{item.contact}</td>
                        <td>{item.email}</td>
                        <td>
                          <div>
                            {" "}
                            {`${item.description.substring(0, 40)}...`}
                          </div>
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginRight: "-15px",
                            }}
                          >
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                handleUserGistView(item);
                              }}
                            >
                              <FaEye size={15} color="green" />
                            </div>
                            <div
                              style={{ marginLeft: "10px", cursor: "pointer" }}
                              onClick={() => {
                                handleUserGistDelete(item);
                              }}
                            >
                              <FaTrashAlt size={15} color="tomato" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "15px 10px 5px 10px",
            }}
          >
            {numberofpages === 1 && (
              <>
                <p className="table-pageactive">1</p>
              </>
            )}
            {numberofpages === 2 && (
              <>
                <p
                  onClick={() => {
                    setActivePage(1);
                  }}
                  className={
                    activepage === 1
                      ? "table-pageactive"
                      : "table-pageunavailable"
                  }
                >
                  1
                </p>
                <p
                  onClick={() => {
                    setActivePage(2);
                  }}
                  className={
                    activepage === 2
                      ? "table-pageactive"
                      : "table-pageunavailable"
                  }
                >
                  2
                </p>
              </>
            )}
            {numberofpages === 3 && (
              <>
                <p
                  onClick={() => {
                    setActivePage(activepage === 1 ? 1 : activepage - 1);
                  }}
                  className={
                    activepage === 1
                      ? "table-pageactive"
                      : "table-pageunavailable"
                  }
                >
                  {activepage === 1 ? 1 : activepage - 1}
                </p>
                <p
                  onClick={() => {
                    setActivePage(activepage === 1 ? 2 : activepage);
                  }}
                  className={
                    activepage === 1
                      ? "table-pageunavailable"
                      : "table-pageactive"
                  }
                >
                  {activepage === 1 ? 2 : activepage}
                </p>
                <p
                  onClick={() => {
                    setActivePage(
                      activepage === 1
                        ? 3
                        : activepage + 1 <= numberofpages
                        ? activepage + 1
                        : 1
                    );
                  }}
                  className="table-pageunavailable"
                >
                  {activepage === 1
                    ? 3
                    : activepage + 1 <= numberofpages
                    ? activepage + 1
                    : 1}
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {trigger === 1 && (
        <Popup trigger={true} setTrigger={settrigger}>
          <h1 className="popup-title">{view.email}</h1>
          <p className="popup-message">{view.description} </p>
        </Popup>
      )}
      {trigger === 0 && (
        <Popup trigger={true} setTrigger={settrigger}>
          <h1 className="popup-title">Are You sure you want to delete?</h1>
          <p className="popup-message">{deleteuser.email} </p>
          <p className="popup-message">{deleteuser.description} </p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => {
                deletecontact(deleteuser.id);
              }}
              style={{
                color: "white",
                backgroundColor: "tomato",
                height: "30px",
                width: "70px",
                fontFamily: "sans-serif",
                fontSize: "12px",
                borderWidth: "0px",
                borderRadius: "7px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </Popup>
      )}
    </>
  );
}

export default CtfTablelist;
