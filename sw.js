importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// نظف الكاش القديم أولًا
workbox.precaching.cleanupOutdatedCaches(); 

// أضف الكاش الجديد
// 1. تخزين الملفات الأساسية مسبقًا (Precache)
workbox.precaching.precacheAndRoute([
  // الصفحات
  { url: '/index.html', revision: 'v2' },
  { url: '/about.html', revision: 'v2' },
  { url: '/blog.html', revision: 'v2' },
  { url: '/book-appointment.html', revision: 'v2' },
  { url: '/404.html', revision: 'v2' },

  // ملفات CSS
  { url: '/css/style.css', revision: 'v1' },
  { url: '/css/swiper-about.css', revision: 'v1' },
  { url: '/css/scroll-up.css', revision: 'v1' },
  { url: '/css/call-us.css', revision: 'v1' },

  // ملفات JS
  { url: '/js/active-nav-link.js', revision: 'v1' },
  { url: '/js/blog.js', revision: 'v3' },
  { url: '/js/book-appointment.js', revision: 'v1' },
  { url: '/js/loading-page.js', revision: 'v1' },
  { url: '/js/open-close-nav.js', revision: 'v1' },
  { url: '/js/scroll-up.js', revision: 'v1' },
  { url: '/js/send-to-whatsapp.js', revision: 'v1' },
  { url: '/js/SharePage.js', revision: 'v1' },
  { url: '/js/swiper-about.js', revision: 'v1' },
  { url: '/js/swiper-home.js', revision: 'v1' },
  { url: '/js/wow.min.js', revision: 'v1' },
  { url: '/app.js', revision: 'v1' },

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
    cacheName: 'cdn-libs-cache',
  })
);

// 3. تخزين الصور (Cache First)
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst({
    cacheName: 'images-cache'
  })
);

self.addEventListener('install', (event) => {
  self.skipWaiting(); // يتخطى مرحلة الانتظار
});

self.addEventListener('activate', (event) => {
  clients.claim(); // يسيطر على جميع النوافذ المفتوحة
});

// 4. استراتيجية للصفحات (Network First)
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'document',
  new workbox.strategies.NetworkFirst({
    cacheName: 'pages-cache'
  })
);