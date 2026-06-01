// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');
toggle.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Form submit (placeholder — conecte ao seu backend ou Formspree)
document.getElementById('form-contato').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = 'Mensagem enviada!';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Enviar Mensagem';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.area-card, .membro-card, .sobre__text, .sobre__visual').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});
