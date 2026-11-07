// Keeps App Garage usable offline: always tries the network first, falls back to the last saved copy.
// Also keeps a copy of app icons and the font, so they still show without internet.
const CACHE = "app-garage-v2";
const FILES = ["./", "index.html", "apps.txt", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameSite = url.origin === location.origin;
  const isIconOrFont = req.destination === "image" || req.destination === "font" || req.destination === "style";
  if (!sameSite && !isIconOrFont) return; // e.g. the GitHub list: the page handles that itself
  e.respondWith(
    fetch(req)
      .then(res => {
        // Keep good answers (and cross-site images, which browsers hide the status of).
        if (res.ok || res.type === "opaque") {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: sameSite }))
  );
});
