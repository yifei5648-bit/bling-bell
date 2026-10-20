/* Native SVG animation; no dependencies. */
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const paths = [...document.querySelectorAll('.signal path')];
  const hero = document.querySelector('.hero-line');
  const states = paths.map(path => ({ path, current: 0, target: 0 }));
  let observer;
  let heroObserver;
  let frame = 0;
  let previousTime = 0;
  const clamp = value => Math.min(1, Math.max(0, value));

  function measure() {
    states.forEach(state => {
      const rect = state.path.closest('section').getBoundingClientRect();
      state.target = clamp((innerHeight * .92 - rect.top) / (rect.height * .65));
    });
  }
  function draw(time) {
    frame = 0;
    const delta = previousTime ? Math.min(64, time - previousTime) : 16;
    previousTime = time;
    const ease = 1 - Math.exp(-delta / 140);
    let moving = false;
    states.forEach(state => {
      state.current += (state.target - state.current) * ease;
      if (Math.abs(state.target - state.current) < .001) state.current = state.target;
      else moving = true;
      state.path.style.strokeDashoffset = String(1 - state.current);
    });
    if (moving) frame = requestAnimationFrame(draw);
    else previousTime = 0;
  }
  function schedule() {
    if (reduced.matches || document.hidden) return;
    measure();
    if (!frame) frame = requestAnimationFrame(draw);
  }
  function setup() {
    observer?.disconnect();
    heroObserver?.disconnect();
    cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
    document.documentElement.classList.remove('js-motion');
    hero?.classList.remove('is-drawing');
    if (reduced.matches) {
      paths.forEach(path => { path.style.strokeDasharray = ''; path.style.strokeDashoffset = ''; });
      return;
    }
    states.forEach(state => {
      state.current = 0;
      state.path.style.strokeDasharray = '1';
      state.path.style.strokeDashoffset = '1';
    });
    if ('IntersectionObserver' in window) {
      document.documentElement.classList.add('js-motion');
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }), { threshold: .12 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      if (hero) {
        heroObserver = new IntersectionObserver(entries => {
          hero.classList.toggle('is-drawing', entries[0].isIntersecting);
        });
        heroObserver.observe(hero.closest('.hero-image'));
      }
    } else hero?.classList.add('is-drawing');
    schedule();
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  document.addEventListener('visibilitychange', () => {
    document.documentElement.classList.toggle('page-hidden', document.hidden);
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; previousTime = 0; }
    else schedule();
  });
  reduced.addEventListener('change', setup);
  setup();
})();
