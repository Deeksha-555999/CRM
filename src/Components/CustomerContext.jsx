import { createContext, useState } from "react";

// Create the context
export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  // Create a state to hold the customer data

    const [ customers, setCustomers] = useState([]); // Provide the user data and the function to update it to the children components  
    
  return (
<CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};
