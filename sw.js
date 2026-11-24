'use strict';
const root = self.registration.scope;
const family = 'grubclub-' + new URL(root).pathname + '-';
const version = family + 'quick-plates-v3-home-guide';
const shell = ['index.html','styles.css','app.js','recipes.js','kitchen.js','icon.svg','manifest.webmanifest','app-192.png','app-512.png','images/101.jpg'];
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
  if (!shell.includes(relative) && !relative.startsWith('images/') && !(request.mode==='navigate' && (relative==='' || relative==='index.html'))) return;
  event.respondWith((async () => {
    const cache = await caches.open(version);
    const key = request.mode==='navigate' ? new URL('index.html', root).href : request;
    const hit = await cache.match(key);
    if (hit) return hit;
    const result = await fetch(request);
    if (result.ok && result.type !== 'opaque') {
      try { await cache.put(key, result.clone()); } catch {}
    }
    return result;
  })());
});
