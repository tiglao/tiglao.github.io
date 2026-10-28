// zine flip-through + photo lightbox
// add page scans here in reading order (cover first). null = placeholder.
const PAGES = [
  '../assets/zine/p01.jpg',
  '../assets/zine/p02.jpg',
  '../assets/zine/p03.jpg',
  '../assets/zine/p04.jpg',
  '../assets/zine/p05.jpg',
  '../assets/zine/p06.jpg',
  '../assets/zine/p07.jpg',
  '../assets/zine/p08.jpg',
  '../assets/zine/p09.jpg',
  '../assets/zine/p10.jpg',
  '../assets/zine/p11.jpg',
  '../assets/zine/p12.jpg',
  '../assets/zine/p13.jpg',
  '../assets/zine/p14.jpg',
  '../assets/zine/p15.jpg',
  '../assets/zine/p16.jpg',
  '../assets/zine/p17.jpg',
  '../assets/zine/p18.jpg',
  '../assets/zine/p19.jpg',
  '../assets/zine/p20.jpg',
  '../assets/zine/p21.jpg',
  '../assets/zine/p22.jpg',
  '../assets/zine/p23.jpg',
  '../assets/zine/p24.jpg',
  '../assets/zine/p25.jpg',
  '../assets/zine/p26.jpg',
  '../assets/zine/p27.jpg',
  '../assets/zine/p28.jpg',
  '../assets/zine/p29.jpg',
  '../assets/zine/p30.jpg',
  '../assets/zine/p31.jpg',
  '../assets/zine/p32.jpg',
  '../assets/zine/p33.jpg',
  '../assets/zine/p34.jpg',
  '../assets/zine/p35.jpg',
  '../assets/zine/p36.jpg',
  '../assets/zine/p37.jpg',
  '../assets/zine/p38.jpg',
  '../assets/zine/p39.jpg',
  '../assets/zine/p40.jpg',
];

(() => {
  const leavesEl = document.querySelector('[data-leaves]');
  const prev = document.querySelector('[data-prev]');
  const next = document.querySelector('[data-next]');
  const count = document.querySelector('[data-count]');
  if (!leavesEl) return;

  const side = (i, back) => {
    const el = document.createElement('div');
    el.className = 'leaf__side' + (back ? ' leaf__side--back' : '');
    const src = PAGES[i];
    if (src) {
      const img = document.createElement('img');
      img.src = src; img.alt = `zine page ${i + 1}`; img.loading = 'lazy';
      el.append(img);
    } else if (i < PAGES.length) {
      const ph = document.createElement('div');
      ph.className = 'leaf__ph' + (i === 0 ? ' leaf__ph--cover' : '');
      ph.textContent = i === 0 ? 'pagkakaisa | solidaridad' : `zine page ${i + 1}`;
      el.append(ph);
    }
    return el;
  };

  const n = Math.ceil(PAGES.length / 2);
  const leaves = [];
  for (let k = 0; k < n; k++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.append(side(2 * k, false), side(2 * k + 1, true));
    leaf.addEventListener('click', () => { if (window.__zineZoom > 1) return; go(leaf.classList.contains('is-turned') ? k : k + 1); });
    leavesEl.append(leaf);
    leaves.push(leaf);
  }

  let at = 0; // number of turned leaves
  function go(to) {
    at = Math.max(0, Math.min(n, to));
    leaves.forEach((leaf, k) => {
      const turned = k < at;
      leaf.classList.toggle('is-turned', turned);
      leaf.style.zIndex = turned ? k + 1 : n - k;
    });
    prev.disabled = at === 0;
    next.disabled = at === n;
    if (at === 0) count.textContent = 'cover';
    else if (at === n) count.textContent = 'back cover';
    else count.textContent = `pages ${2 * at}–${2 * at + 1} of ${PAGES.length}`;
  }
  prev.addEventListener('click', () => go(at - 1));
  next.addEventListener('click', () => go(at + 1));
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea, dialog[open]')) return;
    if (e.key === 'Escape' && window.__zineExitFull) window.__zineExitFull();
    const r = document.querySelector('[data-book]').getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    if (e.key === 'ArrowRight') go(at + 1);
    if (e.key === 'ArrowLeft') go(at - 1);
  });
  go(0);
})();

(() => {
  const dlg = document.querySelector('[data-lightbox]');
  const img = document.querySelector('[data-lightbox-img]');
  if (!dlg) return;
  document.querySelectorAll('.p-gallery [data-full]').forEach((b) => {
    b.addEventListener('click', () => {
      img.src = b.dataset.full;
      img.alt = b.querySelector('img')?.alt || '';
      dlg.showModal();
    });
  });
  dlg.querySelector('[data-lightbox-close]').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
})();

// zoom, pan and full screen
(() => {
  const stage = document.querySelector('[data-stage]');
  const wrap = document.querySelector('[data-wrap]');
  if (!stage) return;
  const zin = stage.querySelector('[data-zoom-in]');
  const zout = stage.querySelector('[data-zoom-out]');
  const full = stage.querySelector('[data-fullscreen]');
  const LEVELS = [1, 1.5, 2, 2.5];
  let z = 0;
  window.__zineZoom = 1;

  function setZoom(i) {
    const prev = LEVELS[z];
    const cx = (wrap.scrollLeft + wrap.clientWidth / 2) / prev;
    const cy = (wrap.scrollTop + wrap.clientHeight / 2) / prev;
    z = Math.max(0, Math.min(LEVELS.length - 1, i));
    const s = LEVELS[z];
    window.__zineZoom = s;
    stage.dataset.zoom = String(s);
    stage.style.setProperty('--zoom', s);
    zout.disabled = z === 0;
    zin.disabled = z === LEVELS.length - 1;
    requestAnimationFrame(() => {
      wrap.scrollLeft = cx * s - wrap.clientWidth / 2;
      wrap.scrollTop = cy * s - wrap.clientHeight / 2;
    });
  }
  zin.addEventListener('click', () => setZoom(z + 1));
  zout.addEventListener('click', () => setZoom(z - 1));

  // drag to pan with a mouse (touch already scrolls natively)
  let drag = null;
  wrap.addEventListener('pointerdown', (e) => {
    if (LEVELS[z] === 1 || e.pointerType !== 'mouse') return;
    drag = { x: e.clientX, y: e.clientY, l: wrap.scrollLeft, t: wrap.scrollTop };
    stage.classList.add('is-dragging');
  });
  addEventListener('pointermove', (e) => {
    if (!drag) return;
    wrap.scrollLeft = drag.l - (e.clientX - drag.x);
    wrap.scrollTop = drag.t - (e.clientY - drag.y);
  });
  addEventListener('pointerup', () => { drag = null; stage.classList.remove('is-dragging'); });

  // full screen: native api where available, fixed overlay otherwise (iphone safari)
  const canNative = !!(stage.requestFullscreen || stage.webkitRequestFullscreen);
  function enter() {
    stage.classList.add('is-full');
    full.setAttribute('aria-pressed', 'true');
    full.setAttribute('aria-label', 'exit full screen');
    full.textContent = '×';
    document.documentElement.style.overflow = 'hidden';
    if (canNative) (stage.requestFullscreen || stage.webkitRequestFullscreen).call(stage).catch?.(() => {});
  }
  function exit() {
    stage.classList.remove('is-full');
    full.setAttribute('aria-pressed', 'false');
    full.setAttribute('aria-label', 'full screen');
    full.textContent = '⤢';
    document.documentElement.style.overflow = '';
    setZoom(0);
    const fe = document.fullscreenElement || document.webkitFullscreenElement;
    if (fe) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  }
  window.__zineExitFull = () => { if (stage.classList.contains('is-full')) exit(); };
  full.addEventListener('click', () => (stage.classList.contains('is-full') ? exit() : enter()));
  document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement && stage.classList.contains('is-full')) exit(); });
  document.addEventListener('webkitfullscreenchange', () => { if (!document.webkitFullscreenElement && stage.classList.contains('is-full')) exit(); });
})();
