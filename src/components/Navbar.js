'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold hover:text-yellow-400 transition">
          NORD NICKEL
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-yellow-400 transition">Inicio</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">Nosotros</Link>
          <Link href="#" className="hover:text-yellow-400 transition">Proyectos</Link>
        </nav>
      </div>
    </motion.header>
  );
}