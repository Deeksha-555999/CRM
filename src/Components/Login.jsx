import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";

const Login = () => {
  const { users, setUsers} = React.useContext(UserContext);
  const { currentUser, setCurrentUser } = React.useContext(LoginContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    let foundUser = null;
    users.forEach(element => {
      if (element.email === formData.email && element.password === formData.password) {
        foundUser = element;
      }
    });

    if (foundUser) {
      debugger;
      setCurrentUser(foundUser);
      alert("Login successful");
      navigate("/nav");
    } else {
      alert("Invalid email or password");
    }
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
          Login to CRM
        </h2>

        <form onSubmit={handleSubmit} style={style.form}>
          <div className="form-group">
            <label style={style.label}>
              Email address
              <input
                type="email"
                className="form-input"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                style={style.input}
              />
            </label>
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
              />
            </label>
          </div>
          <button type="submit" style={style.button}>
            Login
          </button>
        </form>
        <p style={style.text}>
          Don't have any account?{" "}
          <Link style={style.register} to="/register">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

const style = {
  container: {
    // width: "300px",
    margin: "50px auto",
    padding: "20px",
    //  border: "1px solid #2524244c",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "black",
    fontFamily: "Arial, sans-serif",
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
};

export default Login;
