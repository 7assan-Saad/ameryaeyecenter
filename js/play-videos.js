/**
 * بناء رابط التضمين حسب المنصة
 * @param {'youtube'|'tiktok'} platform - المنصة
 * @param {string} id - معرّف الفيديو
 * @param {Object} [options] - خيارات إضافية
 * @returns {string} رابط iframe جاهز
 */
function buildEmbedUrl(platform, id, options = {}) {
  const origin = window.location.origin;

  const configs = {
    youtube: {
      base: 'https://www.youtube-nocookie.com/embed/',
      params: {
        autoplay: options.autoplay ? 1 : 0,
        rel: 0,
        playsinline: 1,
        origin,
        ...options.extra,
      },
    },
    tiktok: {
      base: 'https://www.tiktok.com/player/v1/',
      params: {
        autoplay: options.autoplay ? 1 : 0,
        rel: 0,
        ...options.extra,
      },
    },
  };

  const config = configs[platform];
  if (!config) throw new Error(`منصة غير مدعومة: ${platform}`);

  const params = new URLSearchParams(config.params);
  return `${config.base}${id}?${params}`;
}

document.querySelectorAll('.v-facade').forEach((facade) => {
  facade.addEventListener('click', () => {
    const platform = facade.dataset.platform; // 'youtube' أو 'tiktok'
    const id = facade.dataset.videoid;
    if (!platform || !id) return;

    const iframe = document.createElement('iframe');
    iframe.src = buildEmbedUrl(platform, id, { autoplay: true });

    // إعدادات مشتركة
    iframe.title = facade.getAttribute('aria-label') || 'فيديو';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;

    facade.replaceWith(iframe);
  }, { once: true });
});