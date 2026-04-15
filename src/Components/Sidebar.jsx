import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar" style={style.sidebar}>
        <div style={style.logo}> CRM System </div>
        <ul style={style.list}>
          <li
            style={{
              margin: "0.25rem 0",
              display: "list-item",
              boxSizing: "border-box",
            }}
          >
            <NavLink to="/nav" style={style.link}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/customer" style={style.link}>
              Customer
            </NavLink>
          </li>
          <li>
            <NavLink to="/leads" style={style.link}>
              Leads
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" style={style.link}>
              User Management
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

const style = {
  sidebar: {
    width: "250px",
    backgroundColor: "#111111",
    borderRight: "1px solid #333333",
    position: "fixed",
    height: "100vh",
    overflowY: "auto",
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
    borderLeft: "1px solid #333",
  },

  list: {
    color: "#cccccc",
    marginTop: "0",
    padding: "0",
    listStyle: "none",
    textAlign: "start",
  },
  logo: {
    fontSize: "1.7rem",
    fontWeight: "bold",
    // marginBottom: "30px",
    padding: "1rem 1.5rem",
    borderBottom: "1px solid #333333",
    marginBottom: "1rem",
  },
  link: {
    display: "block",
    padding: "12px 15px",
    marginBottom: "10px",
    textDecoration: "none",
    color: "#fff",
    borderRadius: "6px",
    transition: "0.3s",
    backgroundColor: "#222222",
    borderLeftColor: "#fff",
    borderLeft: "3px solid transparent",
  },
};

export default Sidebar;
