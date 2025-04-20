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

let deferredPrompt = null; // لحفظ حدث التثبيت

// 2. عرض البانر عند تحميل الصفحة
window.addEventListener('load', () => {
  // تأخير التحقق من localStorage أيضًا
  setTimeout(() => {
    if (!localStorage.getItem('installBannerDismissed')) {
      installContainer.classList.add('show');
    }
  }, 3000); // الانتظار 3 ثوانٍ قبل التحقق
});


// 3. التقاط حدث التثبيت
if ('onbeforeinstallprompt' in window) {
  window.addEventListener('beforeinstallprompt', (e) => {
    // console.log('حدث beforeinstallprompt تم إطلاقه');
    e.preventDefault();
    deferredPrompt = e;
  });
}

// 4. عند النقر على "تثبيت الآن"
if (installButton) {
  installButton.addEventListener('click', async () => {
    // console.log(deferredPrompt);
    if (!deferredPrompt) {
      console.warn('حدث التثبيت غير متاح !');
      return;
    }

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('تم القبول!');
        installContainer.classList.remove('show');
      }
    } catch (err) {
      console.error('Error prompting install:', err);
    } finally {
      deferredPrompt = null;
    }
  });
}

// 5. عند النقر على لاحقًا
dismissButton.addEventListener('click', () => {
  installContainer.classList.remove('show');
  localStorage.setItem('installBannerDismissed', 'true'); // تجنب إعادة العرض
});

// تحقق إذا تم النقر على لاحقًا يعيد إظهار البانر عند إعادة تحميل الصفحة
if (localStorage.getItem('installBannerDismissed')) {
  setTimeout(() => {
    installContainer.classList.add('show');
  }, 3000)
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

window.addEventListener('appinstalled', () => {
  localStorage.removeItem('installBannerDismissed');
  installContainer.style.display = 'none';
});