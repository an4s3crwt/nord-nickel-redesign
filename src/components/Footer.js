export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">NORD NICKEL © 2024</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-yellow-400 transition">LinkedIn</a>
              <a href="#" className="hover:text-yellow-400 transition">Contacto</a>
              <a href="#" className="hover:text-yellow-400 transition">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }