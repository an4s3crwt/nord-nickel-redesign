import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          NORD NICKEL REDESIGN
        </h1>
        <p className="text-xl mb-8">Innovación en minería sostenible</p>
        <Link
          href="/about"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition"
        >
          Conócenos
        </Link>
      </section>

      {/* Grid de Proyectos (Placeholder) */}
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Proyecto {project}</h3>
              <p className="text-gray-300">Descripción breve del proyecto minero.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}