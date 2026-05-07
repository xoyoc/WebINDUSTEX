// ── AOS ──
AOS.init({ duration: 720, easing: 'ease-out-cubic', once: true, offset: 55 });

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ── Mobile menu ──
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('open');
}
document.querySelectorAll('.navbar-nav a').forEach(a =>
    a.addEventListener('click', () => document.getElementById('navMenu').classList.remove('open'))
);

// ── Counter animation ──
const io = new IntersectionObserver(entries => {
    entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        const end = parseInt(target.dataset.target, 10);
        const duration = 1800;
        const step = end / (duration / 16);
        let cur = 0;
        const tick = setInterval(() => {
            cur += step;
            if (cur >= end) { cur = end; clearInterval(tick); }
            target.textContent = Math.floor(cur).toLocaleString('es-MX');
        }, 16);
        io.unobserve(target);
    });
}, { threshold: 0.5 });
document.querySelectorAll('.count-up').forEach(el => io.observe(el));

// ── Process line fill ──
const procLine = document.getElementById('procLine');
if (procLine) {
    const pObs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { procLine.style.width = '100%'; pObs.disconnect(); }
    }, { threshold: 0.3 });
    pObs.observe(procLine.parentElement);
}

// ── Form submit ──
function handleForm(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.innerHTML = '<i class="fas fa-check"></i> ¡Mensaje enviado!';
    btn.style.background = 'var(--blue)';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar cotización';
        btn.style.background = '';
        btn.disabled = false;
        e.target.reset();
    }, 3200);
}

// ── Smooth scroll (offset for navbar) ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        const el = id === '#' ? null : document.querySelector(id);
        if (el) {
            e.preventDefault();
            window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
const spy = new IntersectionObserver(entries => {
    entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const link = document.querySelector(`.navbar-nav a[href="#${target.id}"]`);
            if (link) link.classList.add('active');
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => spy.observe(s));
