if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registered');
      })
      .catch(error => {
        console.log('ServiceWorker registration failed');
      });
  });
}

// 1. العناصر DOM
const installContainer = document.getElementById('install-container');
const installButton = document.getElementById('install-button');
const dismissButton = document.getElementById('dismiss-button');

let deferredPrompt; // لحفظ حدث التثبيت

// 2. عرض البانر عند تحميل الصفحة
window.addEventListener('load', () => {
  // installContainer.classList.add('show');
  
  setTimeout(() => {
    installContainer.classList.add('show'); // يظهر بعد تأخير بسيط
  }, 5000); // انتظر 3 ثوانٍ (اختياري)
  
});

// 3. التقاط حدث التثبيت
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

// 4. عند النقر على "تثبيت الآن"
installButton.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // عرض رسالة التثبيت الأصلية
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      installContainer.classList.remove('show'); // إخفاء البانر بعد التثبيت
    }
    deferredPrompt = null;
  }
});

// 5. عند النقر على "لاحقًا"
dismissButton.addEventListener('click', () => {
  installContainer.classList.remove('show');
  localStorage.setItem('installBannerDismissed', 'true'); // تجنب إعادة العرض
});

// تحقق مما إذا تم رفض البانر من قبل
if (localStorage.getItem('installBannerDismissed')) {
  installContainer.style.display = 'none';
} else {
  installContainer.classList.add('show');
}

// تحقق مما إذا كان التطبيق يعمل في وضع PWA (مثبت)
const isRunningAsPWA = window.matchMedia('(display-mode: standalone)').matches || 
                      window.navigator.standalone || 
                      document.referrer.includes('android-app://') ||
                      (window.location.search.includes('source=pwa') && localStorage.getItem('installBannerDismissed'));

// إذا كان مثبتًا، أخفي البانر
if (isRunningAsPWA) {
  if (installContainer) installContainer.style.display = 'none';
}