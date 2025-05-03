
// التحكم في إظهار/إخفاء خيارات التواصل
document.getElementById('contactBtn').addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById('contactOptions').classList.toggle('show');
});

// إغلاق خيارات التواصل عند النقر خارجها
document.addEventListener('click', function (e) {
  const contactOptions = document.getElementById('contactOptions');
  if (!e.target.closest('.center-button')) {
    contactOptions.classList.remove('show');
  }
});