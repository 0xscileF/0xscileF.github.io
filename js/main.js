// Mobile nav toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks){
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

/* ============================================================
   GOOGLE ADS CONVERSION TRACKING
   Ersetze die Label-Platzhalter (z.B. "REPLACE_WITH_CALL_LABEL")
   mit den echten Conversion-Labels aus deinem Google Ads Konto.
   Jede Conversion-Aktion (Formular, Anruf, WhatsApp) braucht dort
   ein eigenes Label im Format "AbCdEfGhIjKlMnOp".
============================================================= */
function trackConversion(type){
  if (typeof gtag !== 'function') return;
  const labels = {
    phone:    'AW-XXXXXXXXXX/REPLACE_WITH_CALL_LABEL',
    whatsapp: 'AW-XXXXXXXXXX/REPLACE_WITH_WHATSAPP_LABEL',
    form:     'AW-XXXXXXXXXX/REPLACE_WITH_FORM_LABEL'
  };
  if (labels[type]) {
    gtag('event', 'conversion', { send_to: labels[type] });
  }
}

// Quick hero form (nur auf index.html vorhanden)
const quickForm = document.getElementById('quickForm');
if (quickForm){
  quickForm.addEventListener('submit', function(e){
    e.preventDefault();
    trackConversion('form');
    document.getElementById('qSuccess').style.display = 'block';
    quickForm.querySelectorAll('input,select').forEach(el => el.disabled = true);
  });
}

// FAQ accordion (auf index.html Ausschnitt und faq.html vollständig vorhanden)
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(other => {
      if (other !== item){
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
      }
    });
    item.classList.toggle('open', !isOpen);
    a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
  });
});

/* ============================================================
   AKTIVE NAVIGATION
   Markiert den aktuell passenden Menüpunkt statt immer den ersten.
   - Auf faq.html / impressum.html: der jeweilige Menüpunkt fest aktiv.
   - Auf index.html: per Scroll-Position (IntersectionObserver) den
     Abschnitt ermitteln, der gerade sichtbar ist.
============================================================= */
(function () {
  const links = document.querySelectorAll('.nav-links a');
  if (!links.length) return;

  function clearActive() {
    links.forEach(a => a.classList.remove('active'));
  }

  function activateHref(matchFn) {
    clearActive();
    links.forEach(a => { if (matchFn(a)) a.classList.add('active'); });
  }

  const path = location.pathname.split('/').pop();

  if (path === 'faq.html') {
    activateHref(a => a.getAttribute('href') === 'faq.html');
    return;
  }
  if (path === 'impressum.html') {
    // Kein eigener Menüpunkt für Impressum vorhanden — keine Markierung nötig.
    return;
  }

  // index.html (oder "/"): Scroll-Spy über die Abschnitte
  const sectionIds = ['start', 'warum', 'leistungen', 'kontakt'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function setActiveSection(id) {
    activateHref(a => {
      const href = a.getAttribute('href') || '';
      return href === `#${id}` || href === `index.html#${id}`;
    });
  }

  if (sections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length) {
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveSection(visible[0].target.id);
      }
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });
    sections.forEach(sec => observer.observe(sec));
  }

  // Startzustand direkt beim Laden setzen (Hash oder Standard "start")
  const initialId = location.hash ? location.hash.replace('#', '') : 'start';
  setActiveSection(initialId);
})();
