import "./App.css";
import Customer from "./Components/Customer";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customerlist from "./Components/Customerlist";
import Lead from "./Components/Lead";
import Leads from "./Components/Leads";
import Users from "./Components/Users";
import{ UserProvider} from "./Components/UserContext";
import { LeadProvider } from "./Components/LeadContext";
import { CustomerProvider } from "./Components/CustomerContext";
import { LoginProvider } from "./Components/LoginContext";    


function App() {
  return (
    <>
      <UserProvider>
            <LoginProvider>
        <LeadProvider>
          <CustomerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<Layout />}>
              <Route path="/nav" element={<Nav />} />
              <Route path="/customers/new" element={<Customer />} />
              {/* <Route path="/layout" element={<Layout />}  /> */}
              <Route path="/customer" element={<Customerlist />} />
              
                <Route path="/leads" element={<Lead />} />
                <Route path="/leads/new" element={<Leads />} />
              
              <Route path="/users" element={<Users />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </CustomerProvider>
        </LeadProvider>
        </LoginProvider>
      </UserProvider>
    </>
  );
}
export default App;
