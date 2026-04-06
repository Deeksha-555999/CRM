import React from "react";
import { Link } from "react-router-dom";
import Dash from "./Dash";
import Sidebar from "./Sidebar";


const Nav = () => {
  
  return (
    
    <div className="root" style={style.root}>
      {/* <Sidebar/> */}
      <div className="main-content" style={style.main}>
        {/* <Dash/> */}
        <div className="cards"  style={style.cards}>
          <div className="card" style={style.card}>
            <h2 style={style.cardh2}>0</h2>
            <p style={style.p}>TOTAL CUSTOMERS</p>
          </div>
          <div className="card" style={style.card}>
            <h2 style={style.cardh2}>0</h2>
            <p style={style.p}>ACTIVE CUSTOMERS</p>
          </div>
          <div className="card" style={style.card}>
            <h2 style={style.cardh2}>0</h2>
            <p style={style.p}>TOTAL LEADS</p>
          </div>
          <div className="card" style={style.card}>
            <h2 style={style.cardh2}>0</h2>
            <p style={style.p}>NEW LEAD TODAY</p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            paddingLeft: "20px",
            paddingRight: "20px",
            gap: "2rem",
            gridTemplateColumns: "1fr 1fr",
            marginLeft: "30px",
            
          }}
        >
          <div className="card" style={style.card}>
            <div className="card-header" style={style.cardheader}>
              <h3
                className="card-title"
                style={{
                  textAlign: "start",
                  fontSize: "1.25rem",
                  
                }}
              >
                Recent Leads
              </h3>
              <Link
                to="/leads"
                className="btn btn-secondary btn-sm"
                style={style.smallbtn}
              >
                View All
              </Link>
            </div>
            <p style={{ color: "#aaa", marginTop: "20px" }}>
              No recent leads found.
            </p>
          </div>

          <div className="card" style={style.card}>
            <div className="card-header" style={style.cardheader}>
              <h3
                className="card-title"
                style={{
                  borderBottom: "1px solid #333333",
                  padding: "20px",
                  textAlign: "start",
                  fontSize: "1.25rem",
                }}
              >
                Quick Actions
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingLeft: "20px",
              }}
            >
              <Link to="/customers/new" style={style.whitebtn}>
                Add New Customer
              </Link>
              <Link to="/leads/new" style={style.whitebtn}>
                Add New Lead
              </Link>
              <Link to="/customer" style={style.darkbtn}>
                Manage Customers
              </Link>
              <Link to="/leads" style={style.darkbtn}>
                Manage Leads
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// styling

const style = {
  main: {
    flex: "1",
    marginLeft: "250px",
    padding: "20px",
  },

  root: {
    backgroundColor: "#000000",
    color: "#fff",
    display: "flex",
    minHeight: "100vh",
    
    //borderBottom: "1px solid #333333",
    // borderTop: "1px solid #333333"
  },

  navitems: {
    padding: "12px 15px",
    marginBottom: "10px",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "0.3s",
  },

  cards: {
    display: "grid",
    gap: "20px",
    marginBottom: "1rem",
    gridTemplateColumns: "repeat(4, 1fr)",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "1rem",
    marginLeft: "10px"
  },
  card: {
    // backgroundColor: "#181818",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#111111",
    border: "1px solid #333333",
    marginLeft: "20px"
  },
  cardh2: {
    fontSize: "28px",
    marginBottom: "5px",
    textAlign: "center",
  },

  cardheader: {
    flexDirection: "column",
    textAlign: "start",
    borderBottom: "1px solid #333333",
    
  },

  p: {
    color: "#cccccc",
    textAlign: "center",
  },
  whitebtn: {
    backgroundColor: "#eee",
    color: "#000",
    padding: "10px",
    textAlign: "center",
    textDecoration: "none",
  },

  darkbtn: {
    backgroundColor: "transparent",
    border: "1px solid #555",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    textDecoration: "none",
  },

  smallbtn: {
    backgroundColor: "black",
    border: "1px solid #fff",
    padding: "0.5rem 1rem",
    color: "#fff",
    cursor: "pointer",
    fontSize: "0.875rem",
    textAlign: "start",
  },
};

export default Nav;
