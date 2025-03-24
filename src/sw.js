import { precacheAndRoute } from "workbox-precaching";

// Injected manifest will be placed here
precacheAndRoute(self.__WB_MANIFEST || []);

self.addEventListener("install", () => {
  console.log("Service Worker installing...");
});

self.addEventListener("activate", () => {
  console.log("Service Worker activated.");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
});
