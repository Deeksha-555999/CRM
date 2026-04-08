
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CustomerContext } from "./CustomerContext";

const Customer = ({ user }) => {
  const { customers  , setCustomers } = useContext(CustomerContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    address: "",
    company: "",
    status: "Active",
  });
 
  const isAdmin = (user) =>
    user.role === "admin";
   


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("created customer:", formData);
    setCustomers([...customers, formData]);
    navigate("/nav");

  };

  return (
    <div>
      {/* <Sidebar/> */}
      <div style={{marginLeft: "230px"}}>
        {/* <Dash/> */}
      </div>
    <div
      className="customer"
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
        marginLeft: "230px",
        marginTop: "30px",
       
      }}
    > 
      
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #333333",
          paddingBottom: "1rem",
        }}
      >
        <h2>Add New Customers </h2>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => { 
            if (isAdmin(user)) {
              navigate("/customers/new");
            } else {
              alert("You are not an admin!");
            }
          }                
        }
          style={{
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
             padding: "0.75rem",
                
          }}
        >
          Back to Customer
        </button>
      </div>

      <div
        className="card"
        style={{
          backgroundColor: "black",
          marginTop: "2rem",
          padding: "2rem",
          border: "1px solid #333",
          backgroundColor: "#000000",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              //backgroundColor: "#000000",
              color: "#fff",
            }}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="text" 
                name="fullname"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Customer Name"
                value={formData.fullname}
                onChange={handleChange}
                style={{
                  backgroundColor: "#000000",
                  border: " 1px solid #333333",
                  borderRadius: " 4px",
                  color: " #ffffff",
                  fontSize: "1rem",
                   padding: "0.75rem",
                  width: '100%'
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Customer Email"
                value={formData.email}
                onChange={handleChange}
                 style={{
                  backgroundColor: "#000000",
                  border: " 1px solid #333333",
                  borderRadius: " 4px",
                  color: " #ffffff",
                  fontSize: "1rem",
                   padding: "0.75rem",
                  width: '100%'
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                name="phonenumber"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Customer Phone no. "
                value={formData.phonenumber}
                onChange={handleChange}
                 style={{
                  backgroundColor: "#000000",
                  border: " 1px solid #333333",
                  borderRadius: " 4px",
                  color: " #ffffff",
                  fontSize: "1rem",
                   padding: "0.75rem",
                  width: '100%'
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Company
              </label>
              <input
                type="text"
                name="company"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Company Name"
                value={formData.company}
                onChange={handleChange}
                 style={{
                  backgroundColor: "#000000",
                  border: " 1px solid #333333",
                  borderRadius: " 4px",
                  color: " #ffffff",
                  fontSize: "1rem",
                   padding: "0.75rem",
                  width: '100%'
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Address
              </label>
              <textarea
              name="address"
                className="form-control"
                placeholder="Enter Address"
                id="exampleFormControlTextarea1"
                rows="3"
                type= "text"
                value={formData.address}
                onChange={handleChange}
                style={{
                    backgroundColor: "#000000",
                  border: " 1px solid #333333",
                  borderRadius: " 4px",
                  color: " #ffffff",
                  fontSize: "1rem",
                   resize: "vertical", 
                   width: "204%"
                 }}
              ></textarea>
            </div>
          </div>
             
                      
           <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Status
              </label>
              <select
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={formData.status}
                onChange={handleChange}
                 style={{
                  backgroundColor: "#000000",
                  border: " 1px solid #333333",
                  borderRadius: " 4px",
                  color: " #ffffff",
                  fontSize: "1rem", 
                  padding: "0.75rem",
                  width: '100%'
                }}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="prospect">Prospect</option>
              </select>
            </div>

         
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            <button type="submit" className="btn" style={{backgroundColor: "#fff",
              color: "black", 
            }}>
              Create Customer
            </button>
            <button
              type="button"
              className="btn" style={{backgroundColor: "black", color: "#fff", border: '1px solid white'}}
              onClick={() => navigate("/customer")}
            >
              Cancel
            </button>
          </div> 
        </form>
      </div>
    </div>
    </div>
  );
};

export default Customer;
