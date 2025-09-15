import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegistroVotante from "./pages/RegistroVotante";
import Votante from "./pages/Votante";
import EleccionesVotante from "./pages/EleccionesVotante";
import CandidatosVotante from "./pages/CandidatosVotante";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navbar_admin from "./components/Navbar_admin";
import Carrusel from "./components/Carrusel";
import Administrador from "./pages/Administrador";
import Gestionar_votantes from "./pages/Gestionar_votantes"
import Crear_eleccion_adm from "./pages/Crear_eleccion_adm";
import Eliminar_eleccion from "./pages/Eliminar_eleccion";
import Ver_elecciones_admin from "./pages/Ver_elecciones_admin";
import Resultado_elecciones_adm from "./pages/Resultado_elecciones_adm";
import Iniciar_Cerrar_vot_adm from "./pages/Iniciar_Cerrar_vot_adm";
import Ver_candidatos_adm from "./pages/Ver_candidatos_adm";
import Resultado_candidatos_admin from "./pages/Resultado_candidatos_admin";
import Aprobar_Eliminar_cand_admin from "./pages/Aprobar_Eliminar_cand_admin";
import Mi_perfil_admin from "./pages/Mi_perfil_admin";





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
          <Route path="/Administrador" element={<Administrador />} />
          <Route path="/Gestionar_votantes" element={<Gestionar_votantes />} />
          <Route path="/Crear_eleccion_adm" element={<Crear_eleccion_adm />} />
          <Route path="/Eliminar_eleccion" element={<Eliminar_eleccion />} />
          <Route path="/Ver_elecciones_admin" element={<Ver_elecciones_admin />} />
          <Route path="/Resultado_elecciones_adm" element={<Resultado_elecciones_adm />} />
          <Route path="/Iniciar_Cerrar_vot_adm" element={<Iniciar_Cerrar_vot_adm />} />
          <Route path="/Ver_candidatos_adm" element={<Ver_candidatos_adm />} />
          <Route path="/Resultado_candidatos_admin" element={<Resultado_candidatos_admin/>} />
          <Route path="/Aprobar_Eliminar_cand_admin" element={<Aprobar_Eliminar_cand_admin/>} />
          <Route path="/Mi_perfil_admin" element={<Mi_perfil_admin/>} />

          
        </Routes>
      </div>

      {/* Footer en todas las páginas */}
      <Footer />
    </div>
  );
}
