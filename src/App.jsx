import "./App.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path ="/" element= {<Nav/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
