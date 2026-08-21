/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Aquí borramos el output: export viejo que rompía Vercel */
  devIndicators: false,
};

module.exports = nextConfig;
