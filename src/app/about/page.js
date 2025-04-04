export default function About() {
    return (
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-yellow-400">Sobre Nord Nickel</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
              <p className="mb-6">
                Extraer níquel de forma responsable para impulsar la transición energética global.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Tecnología</h2>
              <p>
                Usamos métodos innovadores para reducir el impacto ambiental en la minería.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }