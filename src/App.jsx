import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegistroVotante from "./pages/RegistroVotante";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/RegistroVotante" element={<RegistroVotante />} />
    </Routes>
  );
}
