import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VistaVotante() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Título */}
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Bienvenido</h1>

      {/* Sección de Gestión y Resultados */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full">
        <Card className="bg-blue-50 rounded-2xl shadow p-6 flex flex-col justify-between">
          <CardContent className="flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold mb-2">Gestión Elecciones</h2>
            <p className="text-gray-700 mb-4">
              Consulta todas las elecciones que hay en el momento
            </p>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-xl w-full">
              Consultar
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 rounded-2xl shadow p-6 flex flex-col justify-between">
          <CardContent className="flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold mb-2">Resultados</h2>
            <p className="text-gray-700 mb-4">
              Una vez finalizada la elección podrás ver los resultados de la misma.
            </p>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-xl w-full">
              Ver Resultados
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Novedades */}
      <h2 className="text-2xl font-bold text-blue-900 mt-12 mb-6">Novedades</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        <Card className="shadow rounded-2xl p-4 bg-white">
          <CardContent>
            <h3 className="text-lg font-bold text-blue-700 mb-2">Próxima Elección</h3>
            <p className="text-gray-700">
              La elección de Rector comenzará el <span className="font-bold">15 de septiembre</span>. No olvides entrar a votar por tu candidato favorito.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow rounded-2xl p-4 bg-white">
          <CardContent>
            <h3 className="text-lg font-bold text-blue-700 mb-2">Seguridad</h3>
            <p className="text-gray-700">
              Recuerda cerrar sesión al terminar tus gestiones para mantener la seguridad del sistema.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow rounded-2xl p-4 bg-white">
          <CardContent>
            <h3 className="text-lg font-bold text-blue-700 mb-2">Voto confidencial</h3>
            <p className="text-gray-700">
              Tu voto es libre y secreto, nadie puede obligarte a votar por alguien distinto a tu verdadera elección.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
