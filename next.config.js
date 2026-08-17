/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- AGREGA ESTA LÍNEA
  images: {
    unoptimized: true, // <-- RECOMENDADO para evitar errores con imágenes en GitHub Pages
  },
  basePath: '/mu-fallen', // <-- AGREGA ESTO (Pon acá el nombre exacto de tu repositorio de GitHub)
};

export default nextConfig;
