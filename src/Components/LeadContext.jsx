import { createContext, useState } from "react";

// Create the context
export const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  // Create a state to hold the lead data
    const [leads, setLeads] = useState([]); // Provide the lead data and the function to update it to the children components
  return (
    

<LeadContext.Provider value={{ leads, setLeads }}>
      {children}
    </LeadContext.Provider>
  );
};