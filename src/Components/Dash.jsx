import React from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from './LoginContext';

const Dash = () => {

  console.log

  const greeting = currentUser?.role === "admin" ? "Welcome, System Admin" :currentUser?.role === "user" ? "Welcome, System User" : "Welcome, Guest";

  return (
    <div>
      <header className="header" style={style.header}>
                <h1 style={style.h1}>Dashboard</h1>
                <div className="action" style={style.action}>
                  <span className="user-info"  style={{color:"#cccccc"}}>{greeting}</span>
                  <Link  to = "/" className="btn btn-secondary btn-sm" style={style.button} onClick ={() => setCurrentUser(null)}>
                    Logout
                  </Link>
                </div>
              </header>
    </div>
  )
}
 const style= {
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
    marginTop: "1px"
    
  },
   header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderBottom: "1px solid #333333",
    lineHeight: "1.2",
    marginBottom: "20px",
    color: "#fff",
    backgroundColor: "#111111",
    //margin: "12px"
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
 
 }
export default Dash
