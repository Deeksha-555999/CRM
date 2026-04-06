import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Dash from "./Dash";
const Header = () => {
  const location = useLocation();

  let pageTitle = "";
  switch (location.pathname) {
    case "/nav":
      pageTitle = "Dashboard";
      break;
    case "/customer":
      pageTitle = "Customer Management";
      break;
    case "/leads":
      pageTitle = "Lead Management";
      break;
    case "/users":
      pageTitle = "User Management";
      break;
    default:
      pageTitle = "CRM System";
  }

  return (
    <div style={{backgroundColor: "#111111"}}>
      <div
        style={{
          borderBottom: "1px solid #333",
          padding: "1rem",
          marginLeft: "250px",
          width: "120%",
          display: "flex",
          alignItems: "end",
        }}
      >
        <h2>{pageTitle}</h2>
         <header className="header" style={style.header}>
          <div className="action" style={style.action}>
            <span className="user-info" style={{ color: "#cccccc" }}>
              Welcome, System Admin
            </span>
            <Link
              to="/"
              className="btn btn-secondary btn-sm"
              style={style.button}
            >
              Logout
            </Link>
          </div>
        </header> 
     
      </div>
    </div>
  );
};

const style = {
  action: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    //flexDirection: "column",
    // marginTop: "20px"
  },
  h1: {
    fontSize: "24px",
    color: "#fff",
    marginLeft: "50px",
    fontSize: "2rem",
    marginTop: "1px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //padding: "1rem 2rem",
    //borderBottom: "1px solid #333333",
    lineHeight: "1.2",
   //marginBottom: "20px",
    color: "#fff",
    backgroundColor: "#111111",
    marginLeft: "47%"
  },
  button: {
    padding: "6px 12px",
    backgroundColor: "black",
    color: "#fff",
    border: "1px solid #fff",
    cursor: "pointer",
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
  },
};
export default Header;
