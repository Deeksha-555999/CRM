import React from "react";
import Sidebar from "./Sidebar";
import Dash from "./Dash";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="root" style={styles.root}>
      <Sidebar />
      <div className="main" style={styles.main}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
  },
  main: { flex: 1, marginLeft: "15px", padding: "10px" },
};
export default Layout;
