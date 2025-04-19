importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// 1. تخزين الملفات الأساسية مسبقًا (Precache)
workbox.precaching.precacheAndRoute([
  // الصفحات
  { url: '/index.html', revision: '1' },
  { url: '/about.html', revision: '1' },
  { url: '/blog.html', revision: '1' },
  { url: '/book-appointment.html', revision: '1' },
  { url: '/404.html', revision: '1' },

  // ملفات CSS
  { url: '/css/style.css', revision: '1' },
  { url: '/css/swiper-about.css', revision: '1' },
  { url: '/css/scroll-up.css', revision: '1' },
  { url: '/css/call-us.css', revision: '1' },

  // ملفات JS
  { url: '/js/active-nav-link.js', revision: '1' },
  { url: '/js/blog.js', revision: '1' },
  { url: '/js/book-appointment.js', revision: '1' },
  { url: '/js/loading-page.js', revision: '1' },
  { url: '/js/open-close-nav.js', revision: '1' },
  { url: '/js/scroll-up.js', revision: '1' },
  { url: '/js/send-to-whatsapp.js', revision: '1' },
  { url: '/js/SharePage.js', revision: '1' },
  { url: '/js/swiper-about.js', revision: '1' },
  { url: '/js/swiper-home.js', revision: '1' },
  { url: '/js/wow.min.js', revision: '1' },

  // الخطوط
  { url: '/fonts/Shamel-thin.ttf', revision: '1' },
  { url: '/fonts/Shamel-Bold.ttf', revision: '1' },
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
    cacheName: 'images-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 يوم
      }),
    ],
  })
);

// 4. استراتيجية للصفحات (Network First)
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'document',
  new workbox.strategies.NetworkFirst({
    cacheName: 'pages-cache',
  })
);