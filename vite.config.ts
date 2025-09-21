import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({ hostname: 'ulunggolaka.icu',
      generateRobotsTxt: true,
      externalSitemaps: ['https://ulunggolaka.icu/sitemap.xml'],
      changefreq: 'weekly',
      priority: 0.8,
      dynamicRoutes: [
        "/",          // Home
        "/profil",    // Profil
        "/layanan",   // Layanan
        "/berita",    // List berita
        "/kontak"     // Kontak
      ]
     }),
  ],
  base: '/',
})
