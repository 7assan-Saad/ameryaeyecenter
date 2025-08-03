const notifications = [
  {
    newBlogs: [
      {
        title: "القرنية المخروطية",
        link: "https://vt.tiktok.com/ZSSY9wCMT/",
      },
      {
        title: "الحول لدى الاطفال",
        link: "https://vt.tiktok.com/ZSSY9oDon/",
      }
    ]
  },
  {
    discounts: [
      // {
      //   title: "احجز عن طريق الموقع أو التطبيق واحصل على خصم 5%",
      //   link: "https://www.facebook.com/share/p/1YijdUvaw5/",
      //   offerEnding: isOfferEndingThisMonth(offerEndDate = new Date(2025, 3, 8)) // (مايو = 3 لأن الأشهر تبدأ من 0)
      // },
      // {
      //   title: "خصم خاص على جلسات علاج جفاف العين",
      //   link: "https://www.facebook.com/share/p/1AaAMmrQ6J/",
      //   offerEnding: isOfferEndingThisMonth(offerEndDate = new Date(2025, 3, 8)) // (مايو = 3 لأن الأشهر تبدأ من 0)
      // },
      // {
      //   title: "عرض مميز على زرع العدسات متعددة البؤر، خصم 15% لفترة محدودة",
      //   link: "https://www.facebook.com/share/p/18ZDbYVg75/",
      //   offerEnding: isOfferEndingThisMonth(offerEndDate = new Date(2025, 3, 8)) // (مايو = 3 لأن الأشهر تبدأ من 0)
      // },
      // {
      //   title: "عروض خاصة على عمليات المياه البيضاء",
      //   link: "https://www.facebook.com/share/p/1AjGtEBHCJ/",
      //   offerEnding: isOfferEndingThisMonth(offerEndDate = new Date(2025, 3, 8)) // (مايو = 3 لأن الأشهر تبدأ من 0)
      // }
    ]
  }
]

const newBlogs  = notifications[0].newBlogs
const discounts = notifications[1].discounts

const notifDiscountsItems = document.querySelector('.notif-discounts-items')
const notifBlogsItems = document.querySelector('.notif-blogs-items')
const blogTitle = document.querySelector('.blog-title')
const notifState = document.querySelector('.notif-state')

// const notifDiscounts = notifDiscountsItems.innerHTML = discounts.map(discount => {
//   return /*html*/`
//     <div
//       class="notif-item d-flex align-items-center justify-content-center position-relative overflow-hidden bg-light rounded-4"
//       style="padding: 25px 25px 35px 25px;">
//       <div class="w-100 text-start">
//         ${
//           (discount.offerEnding) ?
//           `<span class="notif-state text-regular available">العرض متاح</span>`
//           : `<span class="notif-state text-regular not-available">العرض غير متاح</span>`
//         }
//         <h6 class="blog-title lh-lg mb-3">${discount.title}</h6>
//         <a href="${discount.link}" target="_blank"
//           class="fs-7 text-regular text-white bg-gradient rounded-5 px-4 cursor-pointer"
//           style="padding-top: 8px; padding-bottom: 5px;" aria-current="page">
//           <span>المزيـــد</span>
//           <img src="./img/icons/arrow-link.svg" class="ms-2" width="25" alt="arrow-link">
//         </a>
//       </div>
//     </div>
//   `
// }).join('')

const notifBlogs = notifBlogsItems.innerHTML = newBlogs.map(blog => {
  return /*html*/`
    <div
      class="notif-item d-flex align-items-center justify-content-center position-relative overflow-hidden bg-light rounded-4"
      style="padding: 25px 25px 35px 25px;">
      <div class="w-100 text-start">
        <h6 class="blog-title lh-lg mb-3">${blog.title}</h6>
        <a href="${blog.link}" target="_blank"
          class="fs-7 text-regular text-white bg-gradient rounded-5 px-4 cursor-pointer"
          style="padding-top: 8px; padding-bottom: 5px;" aria-current="page">
          <span>المزيـــد</span>
          <img src="./img/icons/arrow-link.svg" class="ms-2" width="25" alt="arrow-link">
        </a>
      </div>
    </div>
  `
}).join('')

// console.log(newBlogs)
// console.log(discounts[0])

const notifBtn = document.querySelector('#notif-btn')
const notifClose = document.querySelector('.notif-close')
const notifList = document.querySelector('.notifications-list')
const notifCount = document.querySelector('.notif-count')
notifCount.innerHTML = newBlogs.length + discounts.length

notifBtn.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  // notifList.classList.toggle('show-list');
  notifList.classList.toggle('show-list');
  notifList.classList.remove('hide-list');
});

notifClose.addEventListener('click', function (e) {
  notifList.classList.add('hide-list');
  notifList.classList.remove('show-list');
});

// إغلاق الإشعارات عند النقر خارجها
document.addEventListener('click', function (e) {
  // if (notifList.classList.contains('show-list')) {
  //   console.log('yes')
  // }
  if (!e.target.closest('.notifications-list')) {
    notifList.classList.add('hide-list');
    notifList.classList.remove('show-list');
  }
});


// Offer end date
function isOfferEndingThisMonth(offerEndDate) {
  // الحصول على التاريخ الحالي
  const today = new Date();
  
  // الحصول على آخر يوم من الشهر الحالي
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  // مقارنة تاريخ انتهاء العرض بآخر يوم من الشهر
  return offerEndDate.getDate() === lastDayOfMonth.getDate() && 
         offerEndDate.getMonth() === lastDayOfMonth.getMonth() && 
         offerEndDate.getFullYear() === lastDayOfMonth.getFullYear();
}
// test:
// console.log(isOfferEndingThisMonth(offerEndDate = new Date(2025, 3, 8)))