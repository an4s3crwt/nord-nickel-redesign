import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Nord Nickel Redesign',
  description: 'Rediseño conceptual del sitio web de Nord Nickel',
};

/**
 * This is the root layout component for the Nord Nickel Redesign application.
 * It wraps the main content with a standard HTML structure, including a Navbar and Footer.
 *
 * @param {Object} props - The component's properties.
 * @param {React.ReactNode} props.children - The main content to be rendered within the layout.
 *
 * @returns {React.ReactElement} - The root layout component with the specified HTML structure.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}