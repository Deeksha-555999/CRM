import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeadContext } from "./LeadContext";

const Leads = () => {
  const { leads, setLeads } = React.useContext(LeadContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    address: "",
    company: "",
    status: "",
    leadsource: "",
    notes: "",
  });

  const handleChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("created lead:", formData);
    setLeads([...leads, formData]);
    navigate("/nav");
  };

  return (
    <div>
      {/* <Sidebar/> */}
      <div style={{ marginLeft: "250px" }}>{/* <Dash/> */}</div>
      <div
        className="customer"
        style={{
          backgroundColor: "black",
          color: "white",
          minHeight: "100vh",
          padding: "2rem",
          marginLeft: "230px",
          // marginTop: "100px"
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
          <h2>Add New Leads </h2>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/leads")}
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid white",
              padding: "0.75rem",
              // width: '100%'
            }}
          >
            Back to Lead
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
                  onChange={(e) => handleChange(e, "fullname")}
                  style={{
                    backgroundColor: "#000000",
                    border: " 1px solid #333333",
                    borderRadius: " 4px",
                    color: " #ffffff",
                    fontSize: "1rem",
                    padding: "0.75rem",
                    width: "100%",
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
                  onChange={(e) => handleChange(e, "email")}
                  style={{
                    backgroundColor: "#000000",
                    border: " 1px solid #333333",
                    borderRadius: " 4px",
                    color: " #ffffff",
                    fontSize: "1rem",
                    padding: "0.75rem",
                    width: "100%",
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
                  onChange={(e) => handleChange(e, "phonenumber")}
                  style={{
                    backgroundColor: "#000000",
                    border: " 1px solid #333333",
                    borderRadius: " 4px",
                    color: " #ffffff",
                    fontSize: "1rem",
                    padding: "0.75rem",
                    width: "100%",
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
                  //    aria-describedby="emailHelp"
                  placeholder="Enter Company Name"
                  value={formData.company}
                  onChange={(e) => handleChange(e, "company")}
                  style={{
                    backgroundColor: "#000000",
                    border: " 1px solid #333333",
                    borderRadius: " 4px",
                    color: " #ffffff",
                    fontSize: "1rem",
                    padding: "0.75rem",
                    width: "100%",
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Lead Source
                </label>
                <select
                  type="lead"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Company Name"
                  value={formData.leadsource}
                  onChange={(e) => handleChange(e, "leadsource")}
                  style={{
                    backgroundColor: "#000000",
                    border: " 1px solid #333333",
                    borderRadius: " 4px",
                    color: " #ffffff",
                    fontSize: "1rem",
                    padding: "0.75rem",
                    width: "100%",
                  }}
                >
                  <option value="all status">Select source</option>
                  <option value="website">Website</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="email-campaign">Email Campaign</option>
                  <option value="trade-show">Trade Show</option>
                  <option value="cold-call">Cold Call</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Status
                </label>
                <select
                  type="status"
                  className="form-control"
                  // id="exampleInputEmail1"
                  // aria-describedby="emailHelp"
                  //placeholder="Enter Company Name"
                  value={formData.status}
                  onChange={(e) => handleChange(e, "status")}
                  style={{
                    backgroundColor: "#000000",
                    border: " 1px solid #333333",
                    borderRadius: " 4px",
                    color: " #ffffff",
                    fontSize: "1rem",
                    padding: "0.75rem",
                    width: "100%",
                  }}
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="converted">Converted</option>
                  <option value="lost">Lost</option>
                </select>
              </div>

              <div className="mb-3 ">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Assigned to (User ID)
                </label>
                <input
                  className="form-control"
                  placeholder="Enter Address"
                  id="exampleFormControlTextarea1"
                  type="number"
                  onChange={(e) => handleChange(e, "assignedto")}
                  style={{
                    backgroundColor: "#000000",
                    border: " 1px solid #333333",
                    borderRadius: " 4px",
                    color: " #ffffff",
                    fontSize: "1rem",
                    //resize: "vertical",
                    width: "204%",
                    padding: "0.75rem",
                    // width: '100%'
                  }}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Notes
              </label>
              <textarea
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                rows={3}
                value={formData.notes}
                onChange={(e) => handleChange(e, "notes")}
                style={{
                  backgroundColor: "#000000",
                  border: " 1px solid #333333",
                  borderRadius: " 4px",
                  color: " #ffffff",
                  fontSize: "1rem",
                  resize: "vertical",
                }}
              ></textarea>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#fff", color: "black" }}
              >
                Create Lead
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "black",
                  color: "#fff",
                  border: "1px solid white",
                }}
                onClick={() => navigate("/leads")}
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

export default Leads;
