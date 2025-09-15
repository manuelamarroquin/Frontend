import React from "react";
import Navbar_admin from "../components/Navbar_admin";
import Footer from "../components/Footer";

const Administrador = () => {
    return (
        <>
            <Navbar_admin />
            <main className="max-w-6xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Panel de Administrador</h1>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Primera tarjeta */}
                    <div className="bg-blue-100 p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Gestión de Votantes</h2>
                        <p className="text-gray-700">
                            En la sección de gestión de votantes encontramos el botón “Mostrar
                            información de todos los votantes”, donde es posible visualizar los datos
                            generales de nuestros estudiantes, como nombre, identificación y otros
                            detalles relevantes. Además, contamos con la opción de habilitar o
                            deshabilitar a cada votante según sea necesario.
                        </p>
                    </div>

                    {/* Segunda tarjeta */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Gestionar Elecciones</h2>
                        <p className="text-gray-700">
                            En Gestionar elecciones contamos con varias opciones: crear una nueva
                            elección, eliminar elecciones existentes, visualizar las elecciones
                            activas o pasadas, consultar los resultados, así como iniciar y cerrar
                            los procesos electorales.
                        </p>
                    </div>

                    {/* Tercera tarjeta (centrada en segunda fila) */}
                    <div className="bg-blue-100 p-6 rounded-lg shadow md:col-span-2 md:w-1/2 md:mx-auto">
                        <h2 className="text-xl font-semibold mb-2">Gestión de Candidatos</h2>
                        <p className="text-gray-700">
                            En la sección de Gestionar candidatos podemos consultar la información de
                            los postulados, revisar los resultados obtenidos por cada uno y, además,
                            aprobarlos o eliminarlos según corresponda.
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
};

export default Administrador;
