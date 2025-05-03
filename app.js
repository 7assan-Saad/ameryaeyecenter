
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

const installContainer    = document.getElementById('install-container');
const installAppContainer = document.querySelector('.inst-app-container');
const installButton       = document.querySelectorAll('.install-button');
const installMsg          = document.querySelector('.inst-msg');
const dismissButton       = document.getElementById('dismiss-button');

let deferredPrompt = null; // لحفظ حدث التثبيت

// التقاط حدث التثبيت
window.addEventListener('beforeinstallprompt', (e) => {
  if (!isAppInstalled()){
    installAppContainer.style.display = 'block';
    installButton.forEach(btn => btn.style.display = 'block');
    installMsg.style.display = 'none';
  
    setTimeout(() => {
      installContainer.classList.add('show-banner');
    }, 3000);
  
    // beforeinstallprompt تم إطلاق'
    e.preventDefault();
    deferredPrompt = e;
    return false;
  }
});


// دالة للتحقق من وضع العرض
function isAppInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches || 
         window.navigator.standalone ||
         document.referrer.includes('android-app://');
}

// تحديث حالة الزر بناءً على وضع التشغيل
function updateInstallButton() {
  
  if (isAppInstalled()) {
    // console.log('App Installed')
    // إخفاء البانر و زر التثبيت في التطبيق
    installContainer.classList.remove('show-banner');
    installContainer.style.display = 'none';
    installAppContainer.style.display = 'none !important';
    installButton.forEach(btn => btn.style.display = 'none !important');
    installMsg.style.display = 'none';

  }
  
  else {
    // console.log('App Is Not Installed')
    // إخفاء البانر في المتصفح
    installContainer.classList.remove('show-banner');
    installContainer.style.display = 'none';
    installAppContainer.style.display = 'block';
    installButton.forEach(btn => btn.style.display = 'none !important');
    installMsg.style.display = 'block';
  }

}

  
// نتحقق عند تحميل الصفحة وعند تغيير وضع العرض
window.addEventListener('load', updateInstallButton);
window.addEventListener('DOMContentLoaded', updateInstallButton);

// عند النقر على "تثبيت الآن"
if (installButton) {
  installButton.forEach(instalBtn => {
    instalBtn.addEventListener('click', async () => {
      if (!deferredPrompt) {
        console.warn('التطبيق مثبت بالفعل !');
        // console.warn('حدث التثبيت غير متاح !');
        return;
      }
  
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          console.log('تم تحميل التطبيق!');
          window.location.reload()
          updateInstallButton()
        }
      }
  
      catch (err) {
        console.error('Error prompting install:', err);
  
      } finally {
        deferredPrompt = null;
      }
  
    });
  })
}

// عند النقر على لاحقًا
dismissButton.addEventListener('click', () => {
  installContainer.classList.remove('show-banner');
  localStorage.setItem('installBannerDismissed', 'true'); // تجنب إعادة العرض
});

// تحقق إذا تم النقر على لاحقًا يعيد إظهار البانر عند إعادة تحميل الصفحة
if (localStorage.getItem('installBannerDismissed')) {
  setTimeout(() => {
    installContainer.classList.add('show-banner');
  }, 3000)
}