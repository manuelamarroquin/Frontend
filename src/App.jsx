import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegistroVotante from "./pages/RegistroVotante";
import Votante from "./pages/Votante";
import EleccionesVotante from "./pages/EleccionesVotante";
import CandidatosVotante from "./pages/CandidatosVotante";
import Footer from "./components/footer";


export default function App() {
  return (
    <div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RegistroVotante" element={<RegistroVotante />} />
          <Route path="/Votante" element={<Votante />} />
          <Route path="/EleccionesVotante" element={<EleccionesVotante />} />
          <Route path="/CandidatosVotante/:id" element={<CandidatosVotante />} />

        </Routes>
      </div>

      {/* Footer en todas las páginas */}
      <Footer />
    </div>
  );
}
