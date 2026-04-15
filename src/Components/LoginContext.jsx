import { createContext, useState } from "react";

// Create the context
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <LoginContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </LoginContext.Provider> // Render the children components with the context provider
  );
};
