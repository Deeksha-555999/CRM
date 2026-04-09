import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dash from "./Dash";

const Users = () => {
  const navigate = useNavigate();
  return (
    
     
        <div
          style={{
            marginLeft: "250px",
            flex: "1",
            backgroundColor: "#000000",
            color: "#fff",
            //marginTop: "100px",
            minHeight: "100vh",
            padding: "2rem",
            position:"fixed"
          }}
        >
          <header style={{ padding: "2rem",  position: "fixed", width: "100%"}}>
            <div onClick={() => navigate("/users")}>Failed to fetch users</div>
          </header>
        
      </div>
    
  );
};

export default Users;
