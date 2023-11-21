// public/service-worker.js

// Cache version
const CACHE_VERSION = "v1";
const CACHE_NAME = `my-app-cache-${CACHE_VERSION}`;

// List of files to cache
const cacheFiles = [
  "/",
  "/index.html",
  // Add other files and assets to cache as needed
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(cacheFiles))
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
