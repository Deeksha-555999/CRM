import { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Create a state to hold the user data
  const [user, setUser] = useState([]); // Provide the user data and the function to update it to the children components
   
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider> // Render the children components with the context provider
    );
};
