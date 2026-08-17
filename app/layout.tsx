// app/layout.tsx
import './globals.css'; // Estilos globales de Tailwind
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="bg-black text-white">
      <body>
        {/* El Navbar se queda fijo arriba en toda la web */}
        <Navbar /> 
        
        {/* Aquí Next.js inyectará el contenido de cada página */}
        <main className="pt-24"> 
          {children}
        </main>
      </body>
    </html>
  );
}
