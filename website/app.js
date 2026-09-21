/* ============================================================
   GyroPad Website — app.js  (Enhanced Animations v2)
   ============================================================ */

(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Navbar scroll shadow + active link highlight ── */
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 8);

    /* Sticky bar */
    const dlSection = document.getElementById('download');
    const sticky = document.getElementById('mobileSticky');
    if (dlSection && sticky) {
      const rect = dlSection.getBoundingClientRect();
      sticky.classList.toggle('visible', rect.top > window.innerHeight);
    }

    /* Active nav link */
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active-link', a.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Hamburger menu ── */
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      navLinks.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Showcase tabs (with fade transition) ── */
  const stabs = document.querySelectorAll('.stab');
  const panels = document.querySelectorAll('.showcase-panel');
  const tabMap = { mobile: 'tab-mobile', desktop: 'tab-desktop', remap: 'tab-remap' };

  stabs.forEach(btn => {
    btn.addEventListener('click', () => {
      stabs.forEach(b => b.classList.remove('active'));
      panels.forEach(p => { p.classList.remove('active'); p.classList.remove('panel-entering'); });
      btn.classList.add('active');
      const el = document.getElementById(tabMap[btn.dataset.tab]);
      if (el) {
        el.classList.add('active');
        requestAnimationFrame(() => el.classList.add('panel-entering'));
      }
    });
  });

  /* ── Download tabs (mobile) ── */
  const dlTabs = document.querySelectorAll('.dl-tab');
  const dlCards = { android: 'dl-android', windows: 'dl-windows' };
  dlTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      dlTabs.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.dl-card').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const el = document.getElementById(dlCards[btn.dataset.dl]);
      if (el) el.classList.add('active');
    });
  });

  /* ── Features carousel dots ── */
  const wrapper = document.querySelector('.features-scroll-wrapper');
  const grid = document.querySelector('.features-grid');
  const dotsEl = document.getElementById('featureDots');

  function buildDots() {
    if (!dotsEl || !grid) return;
    const isMobile = window.innerWidth <= 640;
    dotsEl.innerHTML = '';
    if (!isMobile) return;
    grid.querySelectorAll('.feat-card').forEach((_, i) => {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');
      dotsEl.appendChild(dot);
    });
  }

  function updateDots() {
    if (!wrapper || !grid || !dotsEl) return;
    const cards = Array.from(grid.querySelectorAll('.feat-card'));
    const dots = Array.from(dotsEl.querySelectorAll('span'));
    if (!dots.length) return;
    const cardWidth = (cards[0]?.offsetWidth || 280) + 20;
    const active = Math.round(wrapper.scrollLeft / cardWidth);
    dots.forEach((d, i) => d.classList.toggle('active', i === active));
  }

  buildDots();
  wrapper?.addEventListener('scroll', updateDots, { passive: true });
  window.addEventListener('resize', buildDots);

  /* ── Button ripple effect ── */
  document.querySelectorAll('.btn-primary, .btn-secondary, .btn-download, .btn-sticky').forEach(btn => {
    btn.addEventListener('click', function (e) {
      if (reduced) return;
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute; border-radius:50%; pointer-events:none;
        width:${size}px; height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top - size/2}px;
        background:rgba(255,255,255,0.3);
        transform:scale(0); animation:ripple .55s ease-out forwards;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  /* ── Tilt card effect (desktop only) ── */
  if (!reduced && window.innerWidth > 768) {
    document.querySelectorAll('.feat-card, .dl-card, .req-card').forEach(card => {
      card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        this.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', function () {
        this.style.transform = '';
        this.style.transition = 'transform 0.4s ease';
        setTimeout(() => { this.style.transition = ''; }, 400);
      });
    });
  }

  /* ── Staggered scroll-reveal (IntersectionObserver) ── */
  const revealGroups = [
    { selector: '.feat-card',   delay: 80,  from: 'bottom' },
    { selector: '.step-card',   delay: 120, from: 'bottom' },
    { selector: '.req-card',    delay: 100, from: 'bottom' },
    { selector: '.dl-card',     delay: 100, from: 'bottom' },
    { selector: '.faq-item',    delay: 60,  from: 'bottom' },
    { selector: '.hero-copy',   delay: 0,   from: 'left'   },
    { selector: '.hero-mockup', delay: 150, from: 'right'  },
    { selector: '.section-tag', delay: 0,   from: 'bottom' },
    { selector: '.section-h2',  delay: 80,  from: 'bottom' },
    { selector: '.section-sub', delay: 120, from: 'bottom' },
    { selector: '.steps-grid',  delay: 0,   from: 'bottom' },
  ];

  const fromMap = {
    bottom: 'translateY(36px)',
    left:   'translateX(-40px)',
    right:  'translateX(40px)',
  };

  if (!reduced) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseInt(el.dataset.revealDelay || '0', 10);
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }, delay);
        revealObs.unobserve(el);
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

    revealGroups.forEach(({ selector, delay, from }) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = fromMap[from];
        el.style.transition = 'opacity 0.55s cubic-bezier(.4,0,.2,1), transform 0.55s cubic-bezier(.4,0,.2,1)';
        el.dataset.revealDelay = delay * i;
        revealObs.observe(el);
      });
    });
  }

  /* ── Hero horizon bar tilt animation ── */
  if (!reduced) {
    const horizonIndicator = document.querySelector('.horizon-indicator');
    const horizonLine = document.querySelector('.horizon-line');
    let angle = 0;
    const animateHorizon = () => {
      angle += 0.008;
      const tilt = Math.sin(angle) * 14;
      if (horizonLine) horizonLine.style.transform = `rotate(${tilt}deg)`;
      if (horizonIndicator) {
        horizonIndicator.style.left = `calc(50% + ${Math.sin(angle) * 30}px)`;
        horizonIndicator.style.top  = `calc(50% + ${Math.cos(angle * 0.7) * 5}px)`;
      }
      requestAnimationFrame(animateHorizon);
    };
    requestAnimationFrame(animateHorizon);
  }

  /* ── GP button glow pulse in hero ── */
  if (!reduced) {
    const gpBtn = document.querySelector('.gp-btn');
    if (gpBtn) {
      let gpPulse = 0;
      const animGP = () => {
        gpPulse += 0.04;
        const intensity = (Math.sin(gpPulse) + 1) / 2;
        gpBtn.style.boxShadow = `0 0 ${6 + intensity * 12}px rgba(0,67,156,${0.2 + intensity * 0.5})`;
        requestAnimationFrame(animGP);
      };
      requestAnimationFrame(animGP);
    }
  }

  /* ── Phone mockup floating animation ── */
  if (!reduced) {
    const mockup = document.querySelector('.hero-mockup');
    if (mockup) {
      let floatT = 0;
      const animFloat = () => {
        floatT += 0.012;
        const y = Math.sin(floatT) * 6;
        mockup.style.transform = `translateY(${y}px)`;
        requestAnimationFrame(animFloat);
      };
      requestAnimationFrame(animFloat);
    }
  }

  /* ── Stat numbers count-up when visible ── */
  function countUp(el, target, duration = 1200) {
    const start = performance.now();
    const isFloat = target % 1 !== 0;
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = isFloat
        ? (target * ease).toFixed(1)
        : Math.round(target * ease);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  /* ── Typed text effect for hero subtitle ── */
  if (!reduced) {
    const sub = document.querySelector('.hero-sub');
    if (sub) {
      const text = sub.textContent;
      sub.textContent = '';
      sub.style.opacity = '1';
      let charI = 0;
      const typeInterval = setInterval(() => {
        sub.textContent += text[charI++];
        if (charI >= text.length) clearInterval(typeInterval);
      }, 14);
    }
  }

  /* ── FAQ smooth height animation ── */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', () => {
      if (!reduced && item.open) {
        const p = item.querySelector('p');
        if (!p) return;
        p.style.animation = 'fadeSlideDown 0.3s ease forwards';
      }
    });
  });

  /* ── Inject dynamic CSS keyframes ── */
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes ripple {
      to { transform: scale(2.5); opacity: 0; }
    }
    @keyframes fadeSlideDown {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes gradientShift {
      0%,100% { background-position: 0% 50%; }
      50%      { background-position: 100% 50%; }
    }
    @keyframes floatBadge {
      0%,100% { transform: translateY(0px); }
      50%      { transform: translateY(-4px); }
    }
    @keyframes scanLine {
      0%   { top: 0; }
      100% { top: 100%; }
    }

    /* Active nav link underline */
    .nav-links .active-link {
      color: var(--blue) !important;
      position: relative;
    }
    .nav-links .active-link::after {
      content: '';
      position: absolute;
      inset: auto 0 -4px 0;
      height: 2px;
      background: var(--blue);
      border-radius: 1px;
      animation: none;
    }

    /* Nav link hover underline slide */
    .nav-links a:not(.nav-github) {
      position: relative;
    }
    .nav-links a:not(.nav-github)::after {
      content: '';
      position: absolute;
      left: 0; right: 100%; bottom: -3px;
      height: 1.5px;
      background: var(--blue);
      border-radius: 1px;
      transition: right 0.25s ease;
    }
    .nav-links a:not(.nav-github):hover::after,
    .nav-links a:not(.nav-github).active-link::after {
      right: 0;
    }

    /* Showcase panel fade-in */
    .showcase-panel.active {
      animation: panelFadeIn 0.35s ease forwards;
    }
    @keyframes panelFadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Status badge float */
    .status-badge {
      animation: floatBadge 3s ease-in-out infinite;
    }

    /* Spec chip float (opposite phase) */
    .spec-chip {
      animation: floatBadge 3s ease-in-out infinite 1.5s;
    }

    /* Hero gradient headline shimmer on hover */
    .hero-h1:hover {
      background: linear-gradient(90deg, #1A1C1F 0%, #00439C 40%, #1A1C1F 80%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 2s linear infinite;
    }

    /* Feature card icon bounce on hover */
    .feat-card:hover .feat-icon {
      animation: iconBounce 0.4s cubic-bezier(.36,.07,.19,.97);
    }
    @keyframes iconBounce {
      0%,100% { transform: scale(1) rotate(0deg); }
      30%      { transform: scale(1.15) rotate(-5deg); }
      60%      { transform: scale(0.95) rotate(3deg); }
    }

    /* Step icon spin on hover */
    .step-card:hover .step-icon {
      transition: transform 0.5s cubic-bezier(.4,0,.2,1);
      transform: rotate(15deg) scale(1.1);
    }

    /* Download button shimmer */
    .btn-download::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%);
      background-size: 200% 100%;
      border-radius: inherit;
      pointer-events: none;
      transition: background-position 0s;
    }
    .btn-download:hover::after {
      background-position: -100% 0;
      transition: background-position 0.5s ease;
    }

    /* Phone screen scan line */
    .phone-screen::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      height: 2px;
      background: rgba(0,67,156,0.12);
      animation: scanLine 4s linear infinite;
      pointer-events: none;
      border-radius: 1px;
    }
    .phone-screen { position: relative; }

    /* Badge dot breathing glow */
    .badge-dot {
      box-shadow: 0 0 0 0 rgba(0,67,156,0.4);
      animation: badgePing 2s infinite, pulse 2s infinite;
    }
    @keyframes badgePing {
      0%  { box-shadow: 0 0 0 0 rgba(0,67,156,0.4); }
      70% { box-shadow: 0 0 0 8px rgba(0,67,156,0); }
      100%{ box-shadow: 0 0 0 0 rgba(0,67,156,0); }
    }

    /* Feat card gradient border glow on hover */
    .feat-card {
      transition: transform 0.25s cubic-bezier(.4,0,.2,1),
                  box-shadow 0.25s cubic-bezier(.4,0,.2,1),
                  border-color 0.25s ease;
    }
    .feat-card:hover {
      border-color: rgba(0,67,156,0.25);
      box-shadow: 0 20px 48px -8px rgba(0,67,156,0.12), 0 4px 12px -2px rgba(0,0,0,0.04);
    }

    /* FAQ item hover */
    .faq-item {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .faq-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 40px -8px rgba(17,20,24,0.1);
    }

    /* Section tag pop-in */
    .section-tag {
      transition: transform 0.2s ease, background 0.2s ease;
    }
    .section-tag:hover {
      transform: scale(1.04);
      background: rgba(0,67,156,0.15);
    }

    /* Hero glow breathe */
    .hero-glow {
      animation: glowBreath 6s ease-in-out infinite;
    }
    @keyframes glowBreath {
      0%,100% { opacity: 1; transform: translate(-50%,-50%) scale(1); }
      50%      { opacity: 0.6; transform: translate(-50%,-50%) scale(1.15); }
    }

    /* Mobile sticky visible class */
    .mobile-sticky {
      transform: translateY(100%);
      transition: transform 0.35s cubic-bezier(.4,0,.2,1);
      display: block !important;
    }
    .mobile-sticky.visible {
      transform: translateY(0);
    }

    /* Step connector animate on hover of parent */
    .steps-grid:hover .step-connector svg line {
      stroke: var(--blue);
      transition: stroke 0.3s ease;
    }
  `;
  document.head.appendChild(styleSheet);

  /* ── Magnetic button effect (subtle) ── */
  if (!reduced && window.innerWidth > 768) {
    document.querySelectorAll('.btn-primary, .btn-download').forEach(btn => {
      btn.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.12;
        this.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', function () {
        this.style.transform = '';
        this.style.transition = 'transform 0.4s ease';
        setTimeout(() => { this.style.transition = ''; }, 400);
      });
    });
  }

  /* ── Smooth progress on download button click ── */
  document.querySelectorAll('.btn-download').forEach(btn => {
    btn.addEventListener('click', function () {
      const original = this.innerHTML;
      this.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Starting download…`;
      setTimeout(() => { this.innerHTML = original; }, 3000);
    });
  });

})();
