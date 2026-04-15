import { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Create a state to hold the user data
  const [users, setUsers] = useState([
    {
      name: "Admin",
      email: "admin@example.com",
      role: "admin",
      password: "admin123",
    },
    {
      name: "System User",
      email: "system@example.com",
      role: "user",
      password: "user123",
    },
    {
      name: "",
      email: "",
      role: "",
      password: "",
    },

  ]); // Provide the user data and the function to update it to the children components

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider> // Render the children components with the context provider
  );
};
