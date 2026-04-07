import React from "react";

import { useNavigate } from "react-router-dom";
import { CustomerContext } from "./CustomerContext";

const Customerlist = () => {
  const { customers , setCustomers } = React.useContext(CustomerContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
     

  };
  
  return (
    <div >
      {/* <Sidebar/> */}
      <div style={{marginLeft: "210px"}}>
        {/* <Dash/> */}
      </div>
    <div
      className="customerlist"
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
        marginLeft: "220px",
       
      }}
    >
      <div
        style={{
         // alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #333333",
          paddingBottom: "1rem",
          marginLeft: "30px"
        }}
      >
        <h1>Customer Management</h1>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/customers/new")}
          style={{
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Add New Customer
        </button>
      </div>
      <div
        className="card"
        style={{
          backgroundColor: "black",
          marginTop: "1rem",
          padding: "1rem",
          //border: "1px solid #333",
          backgroundColor: "#000000",
        }}
      >
       

        <div
          className="mb-3"
          style={{
            backgroundColor: "#222222",
            borderColor: "#555555",
            width: "100%",
            color: "#fff",
            padding: "0.75rem 1rem",
            marginInline: "1rem",
            borderRadius: "4px",
           // border: "1px solid",
          }}
        >
          Failed to Fetch Customers
        </div>
      
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search Customer by name,email, or company...."
            onChange={handleChange}
            style={{
              backgroundColor: "#1a1a1a",
              border: " 1px solid #333333",
              borderRadius: " 4px",
              color: " #ffffff",
              width: "100%",
              padding: "0.75rem 1rem",
              marginInline: "1rem",
            }}
          />
        </div>
      
          <table className="table mb-3" style={{borderSpacing: "2px", border: "1px solid #333333", marginInline: "1rem", padding: "0.75rem 1rem"}}>
            <thead style={{borderCollapse: "collapse"}}>
              <tr style={{color: "white",backgroundColor :"#111111", width: "100%"}}>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Status</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{width: "100%", }}>
              {customers.length > 0 ? (
                customers.map((customer, index) => (
                  <tr key={index} style={{color: "white", backgroundColor: "#1a1a1a", width: "100%"}}>  
                    <td>{customer.fullname}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phonenumber}</td>
                    <td>{customer.company}</td>
                    <td>{customer.status}</td>
                    
                    <td>Active</td>
                    {/* <td>{new Date().toLocaleDateString()}</td> */}
                </tr>
                ))
              ) : (
                <tr style={{color: "white", backgroundColor: "#1a1a1a", width: "100%"}}>
                  <td colSpan="8" style={{ textAlign: "center" }}>  
                    No customers found. Please add new customers.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
         </div>
        </div>
      </div>
  );
};

export default Customerlist;
