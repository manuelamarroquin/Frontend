// src/pages/CandidatosVotante.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardCandidato from "../components/CardCandidato";

export default function CandidatosVotante() {
    const { id } = useParams();
    const [candidatos, setCandidatos] = useState([]);
    const [candidatoSeleccionado, setCandidatoSeleccionado] = useState(null); // 👈 Guardamos el candidato que el usuario selecciona

    useEffect(() => {
        // Datos simulados
        const candidatosMock = {
            1: [
                {
                    id: 1,
                    nombre: "Juan Pérez",
                    descripcion: "Estudiante de Ingeniería con experiencia en liderazgo estudiantil.",
                    imagen: "/img/candidato1.jpg",
                },
                {
                    id: 2,
                    nombre: "Ana Gómez",
                    descripcion: "Propuestas innovadoras para mejorar la calidad educativa.",
                    imagen: "/img/candidato2.jpg",
                },
            ],
            2: [
                {
                    id: 3,
                    nombre: "Carlos Ruiz",
                    descripcion: "Comprometido con la inclusión y el bienestar estudiantil.",
                    imagen: "/img/candidato3.jpg",
                },
            ],
        };

        setCandidatos(candidatosMock[id] || []);
    }, [id]);

    const handleVotar = (candidato) => {
        setCandidatoSeleccionado(candidato); // 👈 Abre el modal
    };

    const confirmarVoto = () => {
        // Aquí luego puedes hacer fetch/axios para enviar el voto al backend
        alert(`✅ Voto confirmado para ${candidatoSeleccionado.nombre}`);
        setCandidatoSeleccionado(null); // 👈 Cierra el modal
    };

    const cancelarVoto = () => {
        setCandidatoSeleccionado(null); // 👈 Cierra el modal sin votar
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Candidatos de la Elección {id}
            </h1>

            {candidatos.length === 0 ? (
                <p className="text-center text-gray-600 text-lg">
                    No hay candidatos disponibles para esta elección.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {candidatos.map((candidato) => (
                        <CardCandidato
                            key={candidato.id}
                            candidato={candidato}
                            onVotar={handleVotar}
                        />
                    ))}
                </div>
            )}

            {/* Modal de confirmación */}
            {candidatoSeleccionado && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm w-full text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            Confirmar Voto
                        </h2>
                        <p className="text-gray-600 mb-6">
                            ¿Estás seguro de que deseas votar por{" "}
                            <span className="font-semibold">{candidatoSeleccionado.nombre}</span>?
                        </p>
                        <div className="flex justify-between gap-4">
                            <button
                                onClick={cancelarVoto}
                                className="flex-1 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={confirmarVoto}
                                className="flex-1 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
