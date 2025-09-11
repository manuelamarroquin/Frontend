import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const carouselImages = [
  {
    src: "/img/imagen_de_inicio.png",
    alt: "Imagen 1",
  },
  {
    src: "/img/IMG-2.png",
    alt: "Imagen 2",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % carouselImages.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">



      {/* NAVBAR */}
      
      <Navbar />

      {/* CARRUSEL */}
      <div className="relative w-full max-w-4xl mx-auto mt-8">
        <img
          src={carouselImages[currentIndex].src}
          alt={carouselImages[currentIndex].alt}
          className="w-full h-96 object-cover"
        />
        {/* Flechas */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-60"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-60"
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      {/* SECCIÓN QUIÉNES SOMOS */}
      <section
        id="quienes-somos"
        className="max-w-4xl mx-auto mt-12 p-6 border border-blue-400 rounded-md"
      >
        <h2 className="text-center text-xl font-semibold mb-4">¿Quiénes somos?</h2>
        <p className="text-justify text-gray-700 leading-relaxed">
          Somos una plataforma dedicada a transformar y facilitar los procesos electorales universitarios,
          garantizando seguridad, transparencia y accesibilidad para todos los miembros de la comunidad académica.
          Nuestra misión es integrar tecnologías modernas, como blockchain y validaciones digitales, para asegurar
          que cada voto sea confiable y cada proceso de elección sea legítimo. Nos enfocamos en la innovación tecnológica,
          la participación activa de estudiantes y docentes, y en fomentar la confianza en los sistemas de votación electrónica.
          Buscamos ser una herramienta que conecte a la comunidad universitaria, promoviendo la democracia y la transparencia
          en cada elección, y asegurando que los procesos electorales sean inclusivos, seguros y eficientes.
        </p>
      </section>

      {/* VISIÓN Y MISIÓN */}
      <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-200 p-6 rounded-md">
          <h3 className="font-semibold mb-3">Visión</h3>
          <p className="text-sm text-gray-700">
            Ser la plataforma líder en votaciones electrónicas universitarias a nivel nacional e internacional,
            reconocida por su innovación tecnológica, confiabilidad y capacidad para fomentar la participación democrática en la comunidad académica.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-md">
          <h3 className="font-semibold mb-3">Misión</h3>
          <p className="text-sm text-gray-700">
            Facilitar un proceso electoral universitario seguro, transparente y accesible, integrando tecnologías modernas como blockchain y validaciones digitales, para garantizar la participación confiable de estudiantes y docentes en la elección de sus representantes.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contactanos"
        className="max-w-4xl mx-auto mt-12 text-center px-6"
      >
        <h2 className="font-semibold text-lg mb-4">
          ¡Tu opinión es muy importante, déjanos tu comentario!
        </h2>
        <p className="mb-6 flex justify-center items-center gap-2 text-blue-900 underline">
          <span>📧</span>
          <a href="mailto:servicioalcliente@univote.com.co">
            servicioalcliente@univote.com.co
          </a>
        </p>
        <h2 className="font-semibold text-lg mb-4">
          ¡Si estas buscando una plataforma para tus votaciones, contáctanos!
        </h2>
        <a
          href="https://wa.me/573105675050"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          💬 Escríbenos
        </a>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}