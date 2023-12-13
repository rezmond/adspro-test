const cacheName = 'MyFancyCacheName_v2';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName));
});

self.addEventListener('fetch', async (event) => {
  const url = new URL(event.request.url);
  const isTargetResource =
    event.request.destination === 'image' ||
    url.hostname === 'fakestoreapi.com';

  if (!isTargetResource) {
    return;
  }

  event.respondWith(
    caches.open(cacheName).then((cache) =>
      cache.match(event.request).then(
        (cachedResponse) =>
          cachedResponse ||
          fetch(event.request.url).then((fetchedResponse) => {
            cache.put(event.request, fetchedResponse.clone());
            return fetchedResponse;
          }),
      ),
    ),
  );
});
