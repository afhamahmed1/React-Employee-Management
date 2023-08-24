import "./index.css";
import Employees from "./pages/Employees";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/definition/:search" element={<Definition />} />
          <Route path="/projects" element={<h1>Dashboard</h1>} />
          <Route path="/calender" element={<h1>Dashboard</h1>} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
