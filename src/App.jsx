import "./index.css";
import Employees from "./pages/Employees";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/team" element={<h1>Dashboard</h1>} />
          <Route path="/projects" element={<h1>Dashboard</h1>} />
          <Route path="/calender" element={<h1>Dashboard</h1>} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
