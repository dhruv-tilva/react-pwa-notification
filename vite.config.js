import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg}"],
      },
      srcDir: "src", // Ensure your service worker is in src/
      filename: "sw.ts", // This tells Vite where to find the service worker
    }),
  ],
});
