const blogs = [
  {
    title: "يعني إيه زرع عدسة ؟",
    link: "https://www.tiktok.com/@amrsaid7352/video/7494415011864005893?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "يعني إيه زرع قرنية ؟ ويعني إيه ترقيع قرنية ؟ وهل في فرق بينهم ؟",
    link: "https://www.tiktok.com/@amrsaid7352/video/7476177623312321797?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "يعني إيه مياه بيضاء ؟",
    link: "https://www.tiktok.com/@amrsaid7352/video/7478352312453303557?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "ليه لازم تزيل المياه البيضاء ؟",
    link: "https://www.tiktok.com/@amrsaid7352/video/7479910720855952695?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "هل حساسية العين مرض مزمن ؟ هل مرتبط بالسن ؟ هل ليه علاقة بظروف الشغل وظروف الجو ؟",
    link: "https://www.tiktok.com/@amrsaid7352/video/7493886695012699398?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "هل تعاني من ضعف النظر ؟ الرؤية الضبابية أو ازدواج الرؤية ؟ دلوقتي أحدث عروض آشعة القرنية مجاناً لحالاتنا",
    link: "https://www.facebook.com/share/p/1BAp7YUJi7/",
  },
  {
    title: "معلومات عن تصحيح الابصار بالليزر مع الاستاذ الدكتور / عمرو سعيد استشاري جراحات القرنية المخروطية وتصحيح الابصار",
    link: "https://www.facebook.com/share/v/1YMXpz5GFj/",
  },
  {
    title: "عروض الليزك من مركز العامرية للعيون، دلوقتي تقدر تودع النظارة تستمتع برؤية أوضح مع أحدث تقنيات الليزر وأعلى نسب نجاح",
    link: "https://www.facebook.com/share/p/18wxbRx1eR/",
  },
  {
    title: "أعراض بعد عملية تصحيح الابصار !",
    link: "https://www.tiktok.com/@amrsaid7352/video/7478352200008256773?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "طرق عمليات تصحيح الابصار",
    link: "https://www.tiktok.com/@amrsaid7352/video/7471076071274761478?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "أفضل طرق تصحيح الابصار",
    link: "https://www.tiktok.com/@amrsaid7352/video/7438261979325811986?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "الأن ولفترة محدودة ، خصم 20% علي عمليات الليزك، بمناسبة أجازة نصف العام، والمفاجأة الكشف والفحوصات مجاناً لعمليات تصحيح الإبصار",
    link: "https://www.facebook.com/share/p/1C1Cvqn7jD/",
  },
  {
    title: "لأول مرة في غرب الأسكندرية افتتاح قسم متخصص لعيون الأطفال تحت اشراف أفضل استشاريين عيون الاأطفال في الأسكندرية",
    link: "https://www.facebook.com/share/p/1662s7eEHC/",
  },
  {
    title: "هل جفاف العين مرض بيستمر طول العمر ؟ وهل مالوش علاج غير القطرات بس ؟",
    link: "https://www.tiktok.com/@amrsaid7352/video/7454296344597892358?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "مرض السكر وتأثيره على العين",
    link: "https://www.tiktok.com/@amrsaid7352/video/7450432492131126536?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "أضرار الشاشات على العين، وهل شاشة الكمبيوتر بتطلع إشعاعات تضر العين ؟",
    link: "https://www.tiktok.com/@amrsaid7352/video/7439060884250529032?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "العلاقة بين الأكل وصحة العين !",
    link: "https://www.tiktok.com/@amrsaid7352/video/7441546472186858760?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "ازاي ممكن نحافظ على صحة العين ؟",
    link: "https://www.tiktok.com/@amrsaid7352/video/7440785224121715976?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "هل في فيتامينات معينة تحافظ على صحة العين وتحميها ؟",
    link: "https://www.tiktok.com/@amrsaid7352/video/7440008492598971656?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "قطرات الترطيب وعلاقتها بالعين",
    link: "https://www.tiktok.com/@amrsaid7352/video/7439803443386076424?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "الكشف على نظر الأطفال",
    link: "https://www.tiktok.com/@amrsaid7352/video/7438900183112502584?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "هل كل مشاكل العيون لها علاج ؟",
    link: "https://www.tiktok.com/@amrsaid7352/video/7438723218413784328?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "القرنية المخروطية، أسبابها، وعلاجها",
    link: "https://www.tiktok.com/@amrsaid7352/video/7437560242897964296?_r=1&_t=ZM-8vYq4AomcOz",
  },
  {
    title: "تطور العلم لعلاج أمراض العيون",
    link: "https://www.tiktok.com/@amrsaid7352/video/7437554204253687058?_r=1&_t=ZM-8vYq4AomcOz",
  },
]

const blogContent = document.querySelector(".blog-content").innerHTML = blogs.map(blog => {
  return /*html*/`
    <div class="col py-3">
      <div class="blog-card d-flex align-items-center justify-content-center position-relative overflow-hidden bg-light rounded-5 p-5" style= "height: 100%;">
        <div class= "w-100 text-center">
          <h5 class="blog-title lh-lg overflow-hidden" style= "max-height: 280px">${textSlice(blog.title)}</h5>
          <a href="${blog.link}" target="_blank"
            class="d-block fs-5 text-regular text-white bg-gradient rounded-5 px-5 mt-3 cursor-pointer"
            style="padding-top: 14px; padding-bottom: 9px;" aria-current="page">
            <span>المزيـــد</span>
            <img src="./img/icons/arrow-link.svg" class="ms-2" width="25" alt="arrow-link">
          </a>
        </div>
      </div>
    </div>
  `
}).join('')
 

// text slice function:

function textSlice(text, desktopMax = 116, mobileMax = 140) {
  if (typeof text !== 'string') return '';
  
  // تحديد إذا كانت الشاشة تعتبر موبايل (عرض أقل من 768 بكسل)
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  
  const maxLength = isMobile ? mobileMax : desktopMax;
  
  // لو شاشة الموبايل
  if (text.length <= maxLength) return text;

  // لو الشاشة أكبر من الموبايل
  return text.slice(0, maxLength).trim() + '...';
}

// function textSlice(text, end) {
//   if (typeof text !== 'string') return '';
//   if (text.length <= end) return text;
//   return text.slice(0, end).trim() + '...';
// }