
import React from "react";

export default function CardCandidato({ candidato, onVotar }) {
  return (
    
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-4 cursor-pointer transform hover:scale-105 transition-transform duration">
      <img
        src={candidato.imagen}
        alt={candidato.nombre}
        className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-200"
      />
      <h2 className="text-xl font-semibold text-blue-800 mb-2">
        {candidato.nombre}
      </h2>
      <p className="text-gray-700 text-sm mb-4">{candidato.descripcion}</p>
      <button
        onClick={() => onVotar(candidato)}
        className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
      >
        Votar
      </button>
    </div>
  );
}
