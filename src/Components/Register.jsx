 import React, { useState } from "react";
import { Link} from "react-router-dom";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const {  setUser } = React.useContext(UserContext);
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [error, setError] = useState({});
  const [alert, setAlert] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = {};
    let success = true;

    if (!formData.name) {
      ((newError.name = "Full name is required"), (success = false));
    }
    if (!formData.email) {
      ((newError.email = "Email is required"), (success = false));
    }
    if (!formData.password) {
      ((newError.password = "Password is required"), (success = false));
    }
    if (!formData.confirmPassword) {
      ((newError.confirmPassword = "Confirm Password is required"),
        (success = false));
    }

    if (formData.password !== formData.confirmPassword) {
      ((newError.confirmPassword = "Password don't match"), (success = false));
    }

    setError(newError);

    if (success) {
      setUser(formData);
      setAlert({ message: "Registration is successfully done" });
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container" style={style.container}>
      <div className="log" style={style.log}>
        <h2
          className="card"
          style={{
            //     textAlign: "center",
            marginBottom: "2rem",
            backgroundColor: "#111111",
            color: "white",
            fontSize: "1.25rem",
            fontWeight: "600",
          }}
        >
          Register to CRM
        </h2>

        <form onSubmit={handleSubmit} style={style.form}>
          <div className="form-group">
            <label style={style.label}>
              Full Name
              <input
                type="text"
                className="form-input"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                style={style.input}
                // required
              />
            </label>
            {error.name && <p style={{ color: "red" }}>{error.name}</p>}
          </div>

          <div className="form-group">
            <label style={style.label}>
              Email
              <input
                type="email"
                className="form-input"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                style={style.input}
                // required
              />
            </label>
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          </div>

          <div className="form-group">
            <label style={style.label}>
              Password
              <input
                type="password"
                className="form-input"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
                style={style.input}
                // required
              />
            </label>
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          </div>

          <div className="form-group">
            <label style={style.label}>
              Confirm Password
              <input
                type="password"
                className="form-input"
                name="confirmPassword"
                placeholder="Enter your Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={style.input}
                // required
              />
            </label>
            {error.confirmPassword && (
              <p style={{ color: "red" }}>{error.confirmPassword}</p>
            )}
          </div>

          <div className="form-group" style={{ textAlign: "start" }}>
            <label style={style.label}>
              Role
              <select
                id="role"
                name="role"
                className="form-input "
                style={style.role}
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </label>
          </div>

          <button type="submit" style={style.button}>
            Register
          </button>
        </form>

        {alert.message && <p style={{ color: "green" }}>{alert.message}</p>}

        <p style={style.text}>
          Already have any account?{" "}
          <Link style={style.register} to="/login">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

const style = {
  container: {
    // width: "300px",
    //margin: "50px auto",
    padding: "20px",
    //  border: "1px solid #2524244c",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    marginTop: "2rem",
  },
  label: {
    color: "white",
    textAlign: "start",
  },
  button: {
    padding: "10px",
    backgroundColor: "#fff",
    color: "black",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "1rem",
  },
  log: {
    backgroundColor: "#111111",
    border: " 1px solid #333333",
    padding: "30px",
    borderRadius: "8px",
    width: "310px",
    textAlign: "center",
    // boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  input: {
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    backgroundColor: "black",
    color: "white",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
  register: {
    color: "white",
  },
  role: {
    width: "155%",
  border: "1px solid #ccc",
    padding: "12px",
    borderRadius: "6px",
    margin: "10px 0",
    textAlign: "start",
    backgroundColor: "black",
    color: "white",
  },
};

export default Register;
