importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// نظف الكاش القديم أولًا
workbox.precaching.cleanupOutdatedCaches(); 

// أضف الكاش الجديد
// 1. تخزين الملفات الأساسية مسبقًا (Precache)
workbox.precaching.precacheAndRoute([
  // الصفحات
  { url: '/index.html', revision: 'v10' },
  { url: '/about/index.html', revision: 'v9' },
  { url: '/blog/index.html', revision: 'v9' },
  { url: '/book-appointment/index.html', revision: 'v9' },
  { url: '/cataract-surgery/index.html', revision: 'v1' },
  { url: '/cataract-surgery-guide/index.html', revision: 'v1' },
  { url: '/corneal-diagnostics/index.html', revision: 'v1' },
  { url: '/dry-eye-treatment/index.html', revision: 'v1' },
  { url: '/eyhance-evolux-lenses/index.html', revision: 'v1' },
  { url: '/icl/index.html', revision: 'v1' },
  { url: '/keratoconus/index.html', revision: 'v1' },
  { url: '/lasik/index.html', revision: 'v1' },
  { url: '/lens-types/index.html', revision: 'v1' },
  { url: '/rigid-contact-lenses/index.html', revision: 'v1' },
  { url: '/smile/index.html', revision: 'v1' },
  { url: '/404.html', revision: 'v4' },

  // ملفات CSS
  { url: '/css/style.css', revision: 'v8' },
  { url: '/css/swiper-about.css', revision: 'v1' },
  { url: '/css/scroll-up.css', revision: 'v2' },
  { url: '/css/call-us.css', revision: 'v2' },
  { url: '/css/global.css', revision: 'v1' },
  { url: '/css/article.css', revision: 'v1' },
  { url: '/css/whyDrAmr.css', revision: 'v1' },

  // ملفات JS
  { url: '/js/blog.js', revision: 'v7' },
  { url: '/js/notifications.js', revision: 'v5' },
  { url: '/js/book-appointment.js', revision: 'v1' },
  { url: '/js/active-nav-link.js', revision: 'v2' },
  { url: '/js/bottom-nav.js', revision: 'v1' },
  { url: '/js/loading-page.js', revision: 'v1' },
  { url: '/js/open-close-nav.js', revision: 'v1' },
  { url: '/js/scroll-up.js', revision: 'v3' },
  { url: '/js/send-to-whatsapp.js', revision: 'v1' },
  { url: '/js/SharePage.js', revision: 'v1' },
  { url: '/js/swiper-about.js', revision: 'v1' },
  { url: '/js/swiper-home.js', revision: 'v1' },
  { url: '/js/play-videos.js', revision: 'v1' },
  { url: '/js/wow.min.js', revision: 'v1' },
  { url: '/app.js', revision: 'v2' },

  // الخطوط
  { url: '/fonts/Shamel-thin.ttf', revision: 'v1' },
  { url: '/fonts/Shamel-Bold.ttf', revision: 'v1' },
]);

// 2. تخزين المكتبات الخارجية (CDN)
workbox.routing.registerRoute(
  ({ url }) => 
    url.origin === 'https://cdn.jsdelivr.net' && 
    (url.pathname.includes('bootstrap@5.3.3') || url.pathname.includes('swiper@11')),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cdn-libs-cache-v2',
  })
);

// 3. تخزين الصور (Cache First)
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst({
    cacheName: 'images-cache-v2'
  })
);

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // لا تحذف الكاش المسبق لـ workbox
          if (!cacheName.includes('workbox-precache')) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      clients.claim();
    })
  );
});

// 4. استراتيجية للصفحات (Network First)
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'document',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'AEC-App-v1'
  })
);