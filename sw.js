'use strict';
const root = self.registration.scope;
const family = 'grubclub-' + new URL(root).pathname + '-';
const version = family + 'quick-plates-v6-supermarket-list';
const shell = ['index.html','guide.html','styles.css','app.js','recipes.js','kitchen.js','icon.svg','manifest.webmanifest','app-192.png','app-512.png','images/101.jpg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(version).then(cache => cache.addAll(shell.map(path => new Request(new URL(path, root), {cache:'reload'})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(family) && key !== version).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || !request.url.startsWith(root)) return;
  const relative = request.url.slice(root.length).split('?')[0];
  const page = request.mode === 'navigate' && ['', 'index.html', 'guide.html'].includes(relative);
  if (!page && !shell.includes(relative) && !relative.startsWith('images/')) return;
  event.respondWith((async () => {
    const cache = await caches.open(version);
    const key = page ? new URL(relative || 'index.html', root).href : request;
    const refresh = page || ['app.js', 'styles.css', 'recipes.js', 'kitchen.js'].includes(relative);
    if (!refresh) {
      const saved = await cache.match(key);
      if (saved) return saved;
    }
    try {
      const result = await fetch(request, {cache:'no-cache'});
      if (result.ok && result.type !== 'opaque') {
        try { await cache.put(key, result.clone()); } catch {}
      } else if (result.status >= 500) {
        return await cache.match(key) || result;
      }
      return result;
    } catch (err) {
      const saved = await cache.match(key);
      if (saved) return saved;
      throw err;
    }
  })());
});
